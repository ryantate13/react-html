import {th} from '../src';

describe('th', () => {
    it('renders with children', () => {
        expect(th({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(th({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(th({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(th()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(th({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(th({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(th({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(th({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(th({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(th({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(th({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(th({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(th({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(th({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(th({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(th({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(th({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(th({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(th({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(th({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(th({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(th({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(th({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(th({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(th({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(th({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(th({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(th({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(th({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(th({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(th({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(th({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(th({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(th({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(th({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(th({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(th({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(th({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(th({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(th({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(th({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(th({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(th({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(th({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(th({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(th({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(th({translate: "no"})).toMatchSnapshot();
    });

    it('renders with abbr="TEST"', () => {
        expect(th({abbr: "TEST"})).toMatchSnapshot();
    });

    it('renders with colSpan=1', () => {
        expect(th({colSpan: 1})).toMatchSnapshot();
    });

    it('renders with headers="foo bar"', () => {
        expect(th({headers: "foo bar"})).toMatchSnapshot();
    });

    it('renders with rowSpan=1', () => {
        expect(th({rowSpan: 1})).toMatchSnapshot();
    });

    it('renders with scope="row"', () => {
        expect(th({scope: "row"})).toMatchSnapshot();
    });

    it('renders with scope="col"', () => {
        expect(th({scope: "col"})).toMatchSnapshot();
    });

    it('renders with scope="rowgroup"', () => {
        expect(th({scope: "rowgroup"})).toMatchSnapshot();
    });

    it('renders with scope="colgroup"', () => {
        expect(th({scope: "colgroup"})).toMatchSnapshot();
    });
});