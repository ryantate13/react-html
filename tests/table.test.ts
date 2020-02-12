import {table} from '../src';

describe('table', () => {
    it('renders with children', () => {
        expect(table({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(table({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(table()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(table({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(table({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(table({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(table({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(table({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(table({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(table({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(table({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(table({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(table({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(table({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(table({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(table({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(table({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(table({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(table({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(table({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(table({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(table({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(table({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(table({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(table({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(table({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(table({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(table({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(table({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(table({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(table({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(table({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(table({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(table({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(table({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(table({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(table({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(table({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(table({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(table({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(table({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(table({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(table({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(table({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(table({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(table({translate: "no"})).toMatchSnapshot();
    });
});