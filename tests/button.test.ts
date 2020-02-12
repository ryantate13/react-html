import {button} from '../src';

describe('button', () => {
    it('renders with children', () => {
        expect(button({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(button({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(button()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(button({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(button({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(button({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(button({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(button({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(button({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(button({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(button({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(button({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(button({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(button({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(button({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(button({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(button({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(button({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(button({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(button({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(button({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(button({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(button({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(button({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(button({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(button({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(button({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(button({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(button({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(button({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(button({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(button({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(button({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(button({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(button({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(button({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(button({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(button({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(button({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(button({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(button({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(button({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(button({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(button({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(button({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(button({translate: "no"})).toMatchSnapshot();
    });

    it('renders with disabled="true"', () => {
        expect(button({disabled: true})).toMatchSnapshot();
    });

    it('renders with disabled="false"', () => {
        expect(button({disabled: false})).toMatchSnapshot();
    });

    it('renders with form="TEST"', () => {
        expect(button({form: "TEST"})).toMatchSnapshot();
    });

    it('renders with formAction="https://google.com/"', () => {
        expect(button({formAction: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with formEncType="application/x-www-form-urlencoded"', () => {
        expect(button({formEncType: "application/x-www-form-urlencoded"})).toMatchSnapshot();
    });

    it('renders with formEncType="multipart/form-data"', () => {
        expect(button({formEncType: "multipart/form-data"})).toMatchSnapshot();
    });

    it('renders with formEncType="text/plain"', () => {
        expect(button({formEncType: "text/plain"})).toMatchSnapshot();
    });

    it('renders with formMethod="GET"', () => {
        expect(button({formMethod: "GET"})).toMatchSnapshot();
    });

    it('renders with formMethod="POST"', () => {
        expect(button({formMethod: "POST"})).toMatchSnapshot();
    });

    it('renders with formMethod="dialog"', () => {
        expect(button({formMethod: "dialog"})).toMatchSnapshot();
    });

    it('renders with formNoValidate="true"', () => {
        expect(button({formNoValidate: true})).toMatchSnapshot();
    });

    it('renders with formNoValidate="false"', () => {
        expect(button({formNoValidate: false})).toMatchSnapshot();
    });

    it('renders with formTarget="_blank"', () => {
        expect(button({formTarget: "_blank"})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(button({name: "TEST"})).toMatchSnapshot();
    });

    it('renders with type="submit"', () => {
        expect(button({type: "submit"})).toMatchSnapshot();
    });

    it('renders with type="reset"', () => {
        expect(button({type: "reset"})).toMatchSnapshot();
    });

    it('renders with type="button"', () => {
        expect(button({type: "button"})).toMatchSnapshot();
    });

    it('renders with value="TEST"', () => {
        expect(button({value: "TEST"})).toMatchSnapshot();
    });
});