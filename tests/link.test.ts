import {link} from '../src';

describe('link', () => {

    it('renders with empty attributes', () => {
        expect(link({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(link()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(link({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(link({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(link({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(link({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(link({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(link({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(link({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(link({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(link({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(link({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(link({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(link({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(link({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(link({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(link({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(link({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(link({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(link({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(link({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(link({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(link({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(link({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(link({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(link({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(link({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(link({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(link({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(link({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(link({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(link({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(link({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(link({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(link({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(link({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(link({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(link({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(link({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(link({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(link({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(link({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(link({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(link({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(link({translate: "no"})).toMatchSnapshot();
    });

    it('renders with as="rel"', () => {
        expect(link({as: "rel"})).toMatchSnapshot();
    });

    it('renders with as="preload"', () => {
        expect(link({as: "preload"})).toMatchSnapshot();
    });

    it('renders with as="rel"', () => {
        expect(link({as: "rel"})).toMatchSnapshot();
    });

    it('renders with as="modulepreload"', () => {
        expect(link({as: "modulepreload"})).toMatchSnapshot();
    });

    it('renders with color="#000000"', () => {
        expect(link({color: "#000000"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="anonymous"', () => {
        expect(link({crossOrigin: "anonymous"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="use-credentials"', () => {
        expect(link({crossOrigin: "use-credentials"})).toMatchSnapshot();
    });

    it('renders with href="https://google.com/"', () => {
        expect(link({href: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with hrefLang="es-419"', () => {
        expect(link({hrefLang: "es-419"})).toMatchSnapshot();
    });

    it('renders with integrity="TEST"', () => {
        expect(link({integrity: "TEST"})).toMatchSnapshot();
    });

    it('renders with media="screen"', () => {
        expect(link({media: "screen"})).toMatchSnapshot();
    });

    it('renders with rel="a b c d"', () => {
        expect(link({rel: "a b c d"})).toMatchSnapshot();
    });

    it('renders with sizes="32x32"', () => {
        expect(link({sizes: "32x32"})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(link({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(link({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with type="application/json"', () => {
        expect(link({type: "application/json"})).toMatchSnapshot();
    });
});