import {meta} from '../src';

describe('meta', () => {

    it('renders with empty attributes', () => {
        expect(meta({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(meta()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(meta({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(meta({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(meta({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(meta({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(meta({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(meta({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(meta({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(meta({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(meta({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(meta({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(meta({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(meta({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(meta({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(meta({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(meta({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(meta({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(meta({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(meta({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(meta({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(meta({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(meta({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(meta({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(meta({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(meta({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(meta({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(meta({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(meta({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(meta({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(meta({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(meta({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(meta({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(meta({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(meta({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(meta({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(meta({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(meta({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(meta({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(meta({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(meta({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(meta({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(meta({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(meta({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(meta({translate: "no"})).toMatchSnapshot();
    });

    it('renders with charSet="utf-8"', () => {
        expect(meta({charSet: "utf-8"})).toMatchSnapshot();
    });

    it('renders with content="TEST"', () => {
        expect(meta({content: "TEST"})).toMatchSnapshot();
    });

    it('renders with httpEquiv="content-type"', () => {
        expect(meta({httpEquiv: "content-type"})).toMatchSnapshot();
    });

    it('renders with httpEquiv="default-style"', () => {
        expect(meta({httpEquiv: "default-style"})).toMatchSnapshot();
    });

    it('renders with httpEquiv="refresh"', () => {
        expect(meta({httpEquiv: "refresh"})).toMatchSnapshot();
    });

    it('renders with httpEquiv="x-ua-compatible"', () => {
        expect(meta({httpEquiv: "x-ua-compatible"})).toMatchSnapshot();
    });

    it('renders with httpEquiv="content-security-policy"', () => {
        expect(meta({httpEquiv: "content-security-policy"})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(meta({name: "TEST"})).toMatchSnapshot();
    });
});