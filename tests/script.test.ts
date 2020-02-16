import {script} from '../src';

describe('script', () => {
    it('renders with children', () => {
        expect(script({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(script({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(script({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(script()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(script({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(script({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(script({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(script({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(script({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(script({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(script({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(script({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(script({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(script({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(script({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(script({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(script({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(script({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(script({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(script({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(script({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(script({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(script({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(script({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(script({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(script({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(script({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(script({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(script({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(script({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(script({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(script({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(script({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(script({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(script({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(script({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(script({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(script({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(script({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(script({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(script({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(script({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(script({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(script({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(script({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(script({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(script({translate: "no"})).toMatchSnapshot();
    });

    it('renders with async=true', () => {
        expect(script({async: true})).toMatchSnapshot();
    });

    it('renders with async=false', () => {
        expect(script({async: false})).toMatchSnapshot();
    });

    it('renders with crossOrigin="anonymous"', () => {
        expect(script({crossOrigin: "anonymous"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="use-credentials"', () => {
        expect(script({crossOrigin: "use-credentials"})).toMatchSnapshot();
    });

    it('renders with defer=true', () => {
        expect(script({defer: true})).toMatchSnapshot();
    });

    it('renders with defer=false', () => {
        expect(script({defer: false})).toMatchSnapshot();
    });

    it('renders with integrity="TEST"', () => {
        expect(script({integrity: "TEST"})).toMatchSnapshot();
    });

    it('renders with noModule=true', () => {
        expect(script({noModule: true})).toMatchSnapshot();
    });

    it('renders with noModule=false', () => {
        expect(script({noModule: false})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(script({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with type="module"', () => {
        expect(script({type: "module"})).toMatchSnapshot();
    });
});