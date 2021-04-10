import {object} from '../src';

describe('object', () => {
    it('renders with children', () => {
        expect(object({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(object({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(object({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(object()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(object({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(object({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(object({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(object({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(object({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(object({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(object({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(object({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(object({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(object({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(object({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(object({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(object({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(object({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(object({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(object({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(object({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(object({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(object({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(object({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(object({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(object({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(object({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(object({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(object({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(object({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(object({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(object({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(object({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(object({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(object({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(object({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(object({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(object({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(object({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(object({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(object({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(object({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(object({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(object({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(object({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(object({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(object({translate: "no"})).toMatchSnapshot();
    });

    it('renders with data="https://google.com/"', () => {
        expect(object({data: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with form="TEST"', () => {
        expect(object({form: "TEST"})).toMatchSnapshot();
    });

    it('renders with height=1', () => {
        expect(object({height: 1})).toMatchSnapshot();
    });

    it('renders with name="_blank"', () => {
        expect(object({name: "_blank"})).toMatchSnapshot();
    });

    it('renders with type="application/json"', () => {
        expect(object({type: "application/json"})).toMatchSnapshot();
    });

    it('renders with width=1', () => {
        expect(object({width: 1})).toMatchSnapshot();
    });
});