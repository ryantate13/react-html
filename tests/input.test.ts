import {input} from '../src';

describe('input', () => {

    it('renders with empty attributes', () => {
        expect(input({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(input()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(input({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(input({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(input({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(input({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(input({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(input({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(input({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with autoFocus=true', () => {
        expect(input({autoFocus: true})).toMatchSnapshot();
    });

    it('renders with autoFocus=false', () => {
        expect(input({autoFocus: false})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(input({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(input({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(input({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(input({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(input({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(input({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(input({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(input({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(input({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(input({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(input({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(input({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(input({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(input({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(input({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(input({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(input({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(input({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(input({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(input({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(input({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(input({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(input({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(input({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(input({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(input({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(input({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(input({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(input({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(input({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(input({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(input({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(input({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(input({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(input({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(input({translate: "no"})).toMatchSnapshot();
    });

    it('renders with accept="audio/*"', () => {
        expect(input({accept: "audio/*"})).toMatchSnapshot();
    });

    it('renders with accept="video/*"', () => {
        expect(input({accept: "video/*"})).toMatchSnapshot();
    });

    it('renders with accept="image/*"', () => {
        expect(input({accept: "image/*"})).toMatchSnapshot();
    });

    it('renders with alt="TEST"', () => {
        expect(input({alt: "TEST"})).toMatchSnapshot();
    });

    it('renders with autoComplete="off"', () => {
        expect(input({autoComplete: "off"})).toMatchSnapshot();
    });

    it('renders with checked=true', () => {
        expect(input({checked: true})).toMatchSnapshot();
    });

    it('renders with checked=false', () => {
        expect(input({checked: false})).toMatchSnapshot();
    });

    it('renders with disabled=true', () => {
        expect(input({disabled: true})).toMatchSnapshot();
    });

    it('renders with disabled=false', () => {
        expect(input({disabled: false})).toMatchSnapshot();
    });

    it('renders with form="TEST"', () => {
        expect(input({form: "TEST"})).toMatchSnapshot();
    });

    it('renders with formAction="https://google.com/"', () => {
        expect(input({formAction: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with formEncType="application/x-www-form-urlencoded"', () => {
        expect(input({formEncType: "application/x-www-form-urlencoded"})).toMatchSnapshot();
    });

    it('renders with formEncType="multipart/form-data"', () => {
        expect(input({formEncType: "multipart/form-data"})).toMatchSnapshot();
    });

    it('renders with formEncType="text/plain"', () => {
        expect(input({formEncType: "text/plain"})).toMatchSnapshot();
    });

    it('renders with formMethod="GET"', () => {
        expect(input({formMethod: "GET"})).toMatchSnapshot();
    });

    it('renders with formMethod="POST"', () => {
        expect(input({formMethod: "POST"})).toMatchSnapshot();
    });

    it('renders with formMethod="dialog"', () => {
        expect(input({formMethod: "dialog"})).toMatchSnapshot();
    });

    it('renders with formNoValidate=true', () => {
        expect(input({formNoValidate: true})).toMatchSnapshot();
    });

    it('renders with formNoValidate=false', () => {
        expect(input({formNoValidate: false})).toMatchSnapshot();
    });

    it('renders with formTarget="_blank"', () => {
        expect(input({formTarget: "_blank"})).toMatchSnapshot();
    });

    it('renders with height=1', () => {
        expect(input({height: 1})).toMatchSnapshot();
    });

    it('renders with list="TEST"', () => {
        expect(input({list: "TEST"})).toMatchSnapshot();
    });

    it('renders with max=100', () => {
        expect(input({max: 100})).toMatchSnapshot();
    });

    it('renders with maxLength=1', () => {
        expect(input({maxLength: 1})).toMatchSnapshot();
    });

    it('renders with min=100', () => {
        expect(input({min: 100})).toMatchSnapshot();
    });

    it('renders with minLength=1', () => {
        expect(input({minLength: 1})).toMatchSnapshot();
    });

    it('renders with multiple=true', () => {
        expect(input({multiple: true})).toMatchSnapshot();
    });

    it('renders with multiple=false', () => {
        expect(input({multiple: false})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(input({name: "TEST"})).toMatchSnapshot();
    });

    it('renders with pattern="/.*/"', () => {
        expect(input({pattern: "/.*/"})).toMatchSnapshot();
    });

    it('renders with placeholder="TEST"', () => {
        expect(input({placeholder: "TEST"})).toMatchSnapshot();
    });

    it('renders with readOnly=true', () => {
        expect(input({readOnly: true})).toMatchSnapshot();
    });

    it('renders with readOnly=false', () => {
        expect(input({readOnly: false})).toMatchSnapshot();
    });

    it('renders with required=true', () => {
        expect(input({required: true})).toMatchSnapshot();
    });

    it('renders with required=false', () => {
        expect(input({required: false})).toMatchSnapshot();
    });

    it('renders with size=1', () => {
        expect(input({size: 1})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(input({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with step="any"', () => {
        expect(input({step: "any"})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(input({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with type="input"', () => {
        expect(input({type: "input"})).toMatchSnapshot();
    });

    it('renders with value=100', () => {
        expect(input({value: 100})).toMatchSnapshot();
    });

    it('renders with width=1', () => {
        expect(input({width: 1})).toMatchSnapshot();
    });
});