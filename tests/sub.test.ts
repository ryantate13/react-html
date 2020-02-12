import {sub} from '../src';

describe('sub', () => {
    it('renders with children', () => {
        expect(sub({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(sub({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(sub()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(sub({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(sub({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(sub({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(sub({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(sub({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(sub({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(sub({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(sub({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(sub({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(sub({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(sub({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(sub({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(sub({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(sub({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(sub({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(sub({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(sub({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(sub({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(sub({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(sub({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(sub({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(sub({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(sub({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(sub({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(sub({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(sub({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(sub({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(sub({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(sub({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(sub({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(sub({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(sub({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(sub({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(sub({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(sub({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(sub({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(sub({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(sub({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(sub({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(sub({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(sub({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(sub({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(sub({translate: "no"})).toMatchSnapshot();
    });
});