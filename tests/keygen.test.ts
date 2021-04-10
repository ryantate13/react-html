import {keygen} from '../src';

describe('keygen', () => {
    it('renders with children', () => {
        expect(keygen({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(keygen({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(keygen({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(keygen()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(keygen({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(keygen({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(keygen({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(keygen({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(keygen({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(keygen({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(keygen({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with autoFocus=true', () => {
        expect(keygen({autoFocus: true})).toMatchSnapshot();
    });

    it('renders with autoFocus=false', () => {
        expect(keygen({autoFocus: false})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(keygen({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(keygen({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(keygen({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(keygen({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(keygen({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(keygen({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(keygen({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(keygen({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(keygen({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(keygen({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(keygen({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(keygen({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(keygen({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(keygen({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(keygen({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(keygen({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(keygen({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(keygen({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(keygen({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(keygen({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(keygen({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(keygen({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(keygen({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(keygen({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(keygen({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(keygen({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(keygen({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(keygen({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(keygen({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(keygen({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(keygen({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(keygen({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(keygen({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(keygen({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(keygen({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(keygen({translate: "no"})).toMatchSnapshot();
    });
});