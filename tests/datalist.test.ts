import {datalist} from '../src';

describe('datalist', () => {
    it('renders with children', () => {
        expect(datalist({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(datalist({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(datalist()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(datalist({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(datalist({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(datalist({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(datalist({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(datalist({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(datalist({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(datalist({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(datalist({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(datalist({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(datalist({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(datalist({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(datalist({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(datalist({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(datalist({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(datalist({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(datalist({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(datalist({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(datalist({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(datalist({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(datalist({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(datalist({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(datalist({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(datalist({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(datalist({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(datalist({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(datalist({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(datalist({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(datalist({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(datalist({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(datalist({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(datalist({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(datalist({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(datalist({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(datalist({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(datalist({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(datalist({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(datalist({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(datalist({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(datalist({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(datalist({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(datalist({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(datalist({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(datalist({translate: "no"})).toMatchSnapshot();
    });
});