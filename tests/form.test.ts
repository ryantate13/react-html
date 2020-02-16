import {form} from '../src';

describe('form', () => {
    it('renders with children', () => {
        expect(form({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(form({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(form({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(form()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(form({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(form({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(form({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(form({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(form({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(form({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(form({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(form({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(form({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(form({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(form({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(form({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(form({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(form({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(form({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(form({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(form({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(form({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(form({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(form({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(form({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(form({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(form({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(form({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(form({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(form({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(form({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(form({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(form({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(form({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(form({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(form({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(form({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(form({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(form({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(form({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(form({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(form({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(form({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(form({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(form({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(form({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(form({translate: "no"})).toMatchSnapshot();
    });

    it('renders with acceptCharset="UTF-8"', () => {
        expect(form({acceptCharset: "UTF-8"})).toMatchSnapshot();
    });

    it('renders with action="https://google.com/"', () => {
        expect(form({action: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with autoComplete="on"', () => {
        expect(form({autoComplete: "on"})).toMatchSnapshot();
    });

    it('renders with autoComplete="off"', () => {
        expect(form({autoComplete: "off"})).toMatchSnapshot();
    });

    it('renders with encType="application/x-www-form-urlencoded"', () => {
        expect(form({encType: "application/x-www-form-urlencoded"})).toMatchSnapshot();
    });

    it('renders with encType="multipart/form-data"', () => {
        expect(form({encType: "multipart/form-data"})).toMatchSnapshot();
    });

    it('renders with encType="text/plain"', () => {
        expect(form({encType: "text/plain"})).toMatchSnapshot();
    });

    it('renders with method="GET"', () => {
        expect(form({method: "GET"})).toMatchSnapshot();
    });

    it('renders with method="POST"', () => {
        expect(form({method: "POST"})).toMatchSnapshot();
    });

    it('renders with method="dialog"', () => {
        expect(form({method: "dialog"})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(form({name: "TEST"})).toMatchSnapshot();
    });

    it('renders with noValidate=true', () => {
        expect(form({noValidate: true})).toMatchSnapshot();
    });

    it('renders with noValidate=false', () => {
        expect(form({noValidate: false})).toMatchSnapshot();
    });

    it('renders with target="_blank"', () => {
        expect(form({target: "_blank"})).toMatchSnapshot();
    });
});