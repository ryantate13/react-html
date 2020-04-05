const fs = require('fs'),
    path = require('path'),
    request = require('request-promise'),
    cheerio = require('cheerio');

const src = path.join(__dirname, 'src'),
    lib = path.join(src, 'index.ts'),
    CHILDREN_TYPE = 'Array<ReactNode | ReactNode[]>';

const HTML5_VOID_ELEMENTS = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
]);

const REACT_ATTRIBUTES = {
    'accept-charset': 'acceptCharset',
    accesskey: 'accessKey',
    allowfullscreen: 'allowFullScreen',
    autocapitalize: 'autoCapitalize',
    autocomplete: 'autoComplete',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    charset: 'charSet',
    class: 'className',
    colspan: 'colSpan',
    contenteditable: 'contentEditable',
    crossorigin: 'crossOrigin',
    datetime: 'dateTime',
    dirname: 'dirName',
    enctype: 'encType',
    for: 'htmlFor',
    formaction: 'formAction',
    formenctype: 'formEncType',
    formmethod: 'formMethod',
    formnovalidate: 'formNoValidate',
    formtarget: 'formTarget',
    hreflang: 'hrefLang',
    'http-equiv': 'httpEquiv',
    inputmode: 'inputMode',
    itemid: 'itemID',
    itemprop: 'itemProp',
    itemref: 'itemRef',
    itemscope: 'itemScope',
    itemtype: 'itemType',
    maxlength: 'maxLength',
    minlength: 'minLength',
    nomodule: 'noModule',
    novalidate: 'noValidate',
    readonly: 'readOnly',
    referrerpolicy: 'referrerPolicy',
    rowspan: 'rowSpan',
    spellcheck: 'spellCheck',
    srcdoc: 'srcDoc',
    srclang: 'srcLang',
    srcset: 'srcSet',
    tabindex: 'tabIndex',
    usemap: 'useMap',
};

// TODO revisit these in the future
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33226
const UNSUPPORTED = new Set([
    'allowpaymentrequest',
    'autofocus',
    'dirname',
    'enterkeyhint',
    'imagesizes',
    'imagesrcset',
    'ismap',
    'nonce',
    'ping',
    'playsinline',
    'referrerpolicy',
    'loading',
]);

const test_url = 'https://google.com/';

const test_cases = {
    'Text*': 'TEST',
    'Set of comma-separated tokens* consisting of valid MIME type strings with no parameters or audio/*, video/*, or image/*': 'application/json',
    'ASCII case-insensitive match for "UTF-8"': ['UTF-8', 'utf-8'],
    'Ordered set of unique space-separated tokens, case-sensitive, consisting of one code point in length': 'a,b,c,d',
    'Valid non-empty URL potentially surrounded by spaces': test_url,
    'Serialized feature policy': 'self',
    'Boolean attribute': [true, false],
    'Potential destination, for rel="preload"; script-like destination, for rel="modulepreload"': test_url,
    'Autofill field name and related tokens*': 'off',
    'Valid URL potentially surrounded by spaces': test_url,
    'Set of space-separated tokens': 'foo bar baz',
    'CSS <color>': '#000000',
    'Valid non-negative integer greater than zero': 1,
    'Valid list of floating-point numbers*': '0,0,82,126',
    'Valid date string with optional time': '12:00',
    'Valid month string, valid date string, valid yearless date string, valid time string, valid local date and time string, valid time-zone offset string, valid global date and time string, valid week string, valid non-negative integer, or valid duration string': '12:00',
    'Text': 'TEST',
    'ID*': 'TEST',
    'Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*': 'foo bar',
    'Valid browsing context name or keyword': '_blank',
    'Valid non-negative integer': 1,
    'Valid floating-point number*': 1.1,
    'Valid BCP 47 language tag': 'es-419',
    'Valid source size list': '',
    'Comma-separated list of image candidate strings': 'es-419',
    'Valid custom element name of a defined customized built-in element': 'foo',
    'Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URLs, defined property names, or text*': test_url,
    'Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URL*': test_url,
    'Valid BCP 47 language tag or the empty string': ['es-419', ''],
    'Varies*': 100,
    'Valid media query list': 'screen',
    'Regular expression matching the JavaScript Pattern production': '/.*/',
    'Set of space-separated tokens consisting of valid non-empty URLs': test_url,
    'Referrer policy': 'origin',
    'Unordered set of unique space-separated tokens*': 'a b c d',
    'Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of sizes*': '32x32',
    'The source of an iframe srcdoc document*': '<p>TEST</p>',
    'Valid integer': 1,
    'Valid floating-point number greater than zero, or "any"': ['any', 1.1],
    'CSS declarations*': {color: '#000000'},
    'Valid MIME type string': 'application/json',
    'input type keyword': ['text', 'number', 'email'],
    'Valid hash-name reference*': '#foo',
    'Valid floating-point number': 1.1,
};

// TODO support keyed fragments
const header = tags => `import {
    createElement,
    ReactNode,
    Fragment,
    ${[...new Set(tags.map(t => t.imports).reduce((a, c) => a.concat(c), []))].join(',\n    ')},
} from 'react';

export function _(...children: ${CHILDREN_TYPE}) {
    return createElement(Fragment, {}, ...children);
}
`;

const fn = ({name, type}) => HTML5_VOID_ELEMENTS.has(name)
    ?
    `
export function ${name}(attributes: ${type} | null = {}) {
    return createElement('${name}', attributes);
}
`
    :
    `
export function ${name}(attributes: ${type} | null = {}, ...children: ${CHILDREN_TYPE}) {
    return createElement('${name}', attributes, ...children);
}
`;

// TODO support SVG tags, possibly as separate module, a exists in both and props are not compatible
function get_tags() {
    const react_types = fs.readFileSync('node_modules/@types/react/index.d.ts', 'utf8');
    const html_prop_types = react_types.split('interface IntrinsicElements {')[1]
        .split('}')[0];
    const lines = html_prop_types.split('\n')
        .map(s => s.trim())
        .filter(line => line && line.includes(':'));
    const react_lib_prefix = 'React.';
    const tags = lines.map(line => {
        const parts = line.split(':'),
            imports = parts[1].split(/[<>,;]/).map(s => s.trim())
                .filter(i => i.startsWith(react_lib_prefix))
                .map(s => s.replace(react_lib_prefix, '')),
            type = parts[1].replace(new RegExp(react_lib_prefix, 'g'), '').replace(/;.*/, '');
        return {
            name: parts[0],
            type,
            imports,
        };
    }).filter(tag => !(['"var"', 'switch'].includes(tag.name)) && !tag.type.includes('SVG'));

    return tags;
}

async function get_attributes() {
    const whatwg_spec = await request.get('https://html.spec.whatwg.org/multipage/indices.html'),
        $ = cheerio.load(whatwg_spec),
        attributes_table = $('#attributes-1'),
        headers = attributes_table.find('thead th')
            .map((_, th) => $(th).text().replace(/[^A-Za-z]/g, '').trim().toLowerCase())
            .toArray();

    return attributes_table.find('tbody tr')
        .map((_, tr) => $(tr).find('th,td')
            .toArray()
            .reduce((a, c, i) => {
                const key = headers[i],
                    text = $(c).text().trim(),
                    value = text.split('\n').map(s => s.trim()).join(' ');

                if (text === 'HTML elements')
                    a.global = true;

                switch (key) {
                    case 'elements':
                        a[key] = text.split(';').map(s => s.trim());
                        break;
                    case 'value':
                        const code_elements = $(c).find('code');
                        a.valid_values = (code_elements.length)
                            ?
                            code_elements
                                .map((_, code) => $(code).text().trim())
                                .toArray()
                            :
                            test_cases[text];
                    default:
                        a[key] = value;
                }
                return a;
            }, {}))
        .toArray();
}

function make_tests(fn, tests) {
    return `import {${fn}} from '../src';

describe('${fn}', () => {${
        HTML5_VOID_ELEMENTS.has(fn)
            ?
            ''
            :
            `
    it('renders with children', () => {
        expect(${fn}({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(${fn}({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });`
    }

    it('renders with empty attributes', () => {
        expect(${fn}({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(${fn}()).toMatchSnapshot();
    });
${
        tests.map(({attribute, value}) => {
            const attribute_name = REACT_ATTRIBUTES[attribute] || attribute,
                rendered_value = JSON.stringify(value);
            return `
    it('renders with ${attribute_name}=${rendered_value}', () => {
        expect(${fn}({${attribute_name}: ${rendered_value}})).toMatchSnapshot();
    });
`;
        }).join('')
    }});`;
}

function test_attributes({attribute, valid_values}) {
    return Array.isArray(valid_values)
        ?
        valid_values.map(value => ({attribute, value}))
        :
        [{attribute, value: valid_values}];
}

async function main() {
    const tags = get_tags(),
        names = new Set(),
        element_attributes = {
            '*': [],
        };

    fs.writeFileSync(lib, header(tags));

    for (const tag of tags) {
        console.log(`generated fn for: ${tag.name}`);
        names.add(tag.name);
        fs.appendFileSync(lib, fn(tag));
    }

    const attributes = await get_attributes();

    for (const {attribute, elements, global, valid_values} of attributes) {
        const a = {
            attribute,
            valid_values,
        };
        if (global)
            element_attributes['*'].push(a);
        else
            elements
                .filter(e => names.has(e))
                .forEach(e => {
                    if (!element_attributes[e])
                        element_attributes[e] = [];
                    element_attributes[e].push(a);
                });
    }

    for (const name of names)
        if (!element_attributes[name])
            element_attributes[name] = [];

    let test_count = 0;

    for (const [tag, atts] of Object.entries(element_attributes)) {
        if (tag !== '*') {
            const all_attributes = element_attributes['*']
                    .concat(atts)
                    .filter(({attribute}) => !UNSUPPORTED.has(attribute)),
                test_cases = all_attributes.map(test_attributes).reduce((a, c) => a.concat(c), []),
                tests = make_tests(tag, test_cases);
            test_count += tests.length;
            fs.writeFileSync(path.join(__dirname, 'tests', `${tag}.test.ts`), tests);
            console.log(`generated test for: ${tag}`);
        }
    }

    const stats = [
        'generated:',
        `${tags.length} functions`,
        `${fs.readdirSync(path.join(__dirname, 'tests')).filter(p => p.includes('.test.ts')).length} test suites`,
        `${test_count} tests`,
    ];

    for (const stat of stats)
        console.log(stat);
}

main().catch(console.error);
