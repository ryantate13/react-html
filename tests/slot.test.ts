import {slot} from '../src';

describe('slot', () => {
    it('renders with children', () => {
        expect(slot({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(slot({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(slot({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(slot()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(slot({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(slot({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(slot({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(slot({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(slot({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(slot({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(slot({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(slot({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(slot({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(slot({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(slot({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(slot({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(slot({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(slot({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(slot({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(slot({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(slot({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(slot({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(slot({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(slot({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(slot({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(slot({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(slot({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(slot({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(slot({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(slot({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(slot({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(slot({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(slot({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(slot({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(slot({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(slot({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(slot({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(slot({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(slot({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(slot({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(slot({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(slot({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(slot({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(slot({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(slot({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(slot({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(slot({translate: "no"})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(slot({name: "TEST"})).toMatchSnapshot();
    });
});