import {rt} from '../src';

describe('rt', () => {
    it('renders with children', () => {
        expect(rt({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(rt({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(rt()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(rt({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(rt({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(rt({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(rt({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(rt({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(rt({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(rt({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(rt({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(rt({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(rt({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(rt({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(rt({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(rt({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(rt({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(rt({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(rt({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(rt({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(rt({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(rt({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(rt({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(rt({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(rt({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(rt({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(rt({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(rt({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(rt({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(rt({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(rt({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(rt({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(rt({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(rt({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(rt({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(rt({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(rt({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(rt({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(rt({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(rt({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(rt({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(rt({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(rt({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(rt({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(rt({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(rt({translate: "no"})).toMatchSnapshot();
    });
});