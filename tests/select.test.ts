import {select} from '../src';

describe('select', () => {
    it('renders with children', () => {
        expect(select({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(select({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(select({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(select()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(select({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(select({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(select({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(select({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(select({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(select({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(select({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(select({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(select({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(select({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(select({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(select({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(select({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(select({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(select({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(select({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(select({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(select({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(select({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(select({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(select({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(select({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(select({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(select({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(select({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(select({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(select({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(select({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(select({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(select({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(select({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(select({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(select({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(select({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(select({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(select({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(select({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(select({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(select({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(select({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(select({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(select({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(select({translate: "no"})).toMatchSnapshot();
    });

    it('renders with autoComplete="off"', () => {
        expect(select({autoComplete: "off"})).toMatchSnapshot();
    });

    it('renders with disabled=true', () => {
        expect(select({disabled: true})).toMatchSnapshot();
    });

    it('renders with disabled=false', () => {
        expect(select({disabled: false})).toMatchSnapshot();
    });

    it('renders with form="TEST"', () => {
        expect(select({form: "TEST"})).toMatchSnapshot();
    });

    it('renders with multiple=true', () => {
        expect(select({multiple: true})).toMatchSnapshot();
    });

    it('renders with multiple=false', () => {
        expect(select({multiple: false})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(select({name: "TEST"})).toMatchSnapshot();
    });

    it('renders with required=true', () => {
        expect(select({required: true})).toMatchSnapshot();
    });

    it('renders with required=false', () => {
        expect(select({required: false})).toMatchSnapshot();
    });

    it('renders with size=1', () => {
        expect(select({size: 1})).toMatchSnapshot();
    });
});