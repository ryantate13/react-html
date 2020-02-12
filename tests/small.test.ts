import {small} from '../src';

describe('small', () => {
    it('renders with children', () => {
        expect(small({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(small({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(small()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(small({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(small({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(small({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(small({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(small({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(small({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(small({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(small({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(small({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(small({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(small({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(small({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(small({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(small({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(small({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(small({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(small({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(small({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(small({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(small({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(small({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(small({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(small({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(small({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(small({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(small({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(small({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(small({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(small({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(small({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(small({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(small({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(small({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(small({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(small({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(small({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(small({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(small({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(small({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(small({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(small({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(small({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(small({translate: "no"})).toMatchSnapshot();
    });
});