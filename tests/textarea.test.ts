import {textarea} from '../src';

describe('textarea', () => {
    it('renders with children', () => {
        expect(textarea({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(textarea({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(textarea({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(textarea()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(textarea({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(textarea({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(textarea({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(textarea({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(textarea({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(textarea({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(textarea({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with autoFocus=true', () => {
        expect(textarea({autoFocus: true})).toMatchSnapshot();
    });

    it('renders with autoFocus=false', () => {
        expect(textarea({autoFocus: false})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(textarea({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(textarea({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(textarea({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(textarea({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(textarea({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(textarea({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(textarea({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(textarea({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(textarea({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(textarea({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(textarea({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(textarea({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(textarea({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(textarea({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(textarea({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(textarea({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(textarea({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(textarea({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(textarea({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(textarea({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(textarea({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(textarea({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(textarea({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(textarea({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(textarea({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(textarea({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(textarea({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(textarea({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(textarea({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(textarea({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(textarea({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(textarea({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(textarea({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(textarea({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(textarea({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(textarea({translate: "no"})).toMatchSnapshot();
    });

    it('renders with autoComplete="off"', () => {
        expect(textarea({autoComplete: "off"})).toMatchSnapshot();
    });

    it('renders with cols=1', () => {
        expect(textarea({cols: 1})).toMatchSnapshot();
    });

    it('renders with dirName="TEST"', () => {
        expect(textarea({dirName: "TEST"})).toMatchSnapshot();
    });

    it('renders with disabled=true', () => {
        expect(textarea({disabled: true})).toMatchSnapshot();
    });

    it('renders with disabled=false', () => {
        expect(textarea({disabled: false})).toMatchSnapshot();
    });

    it('renders with form="TEST"', () => {
        expect(textarea({form: "TEST"})).toMatchSnapshot();
    });

    it('renders with maxLength=1', () => {
        expect(textarea({maxLength: 1})).toMatchSnapshot();
    });

    it('renders with minLength=1', () => {
        expect(textarea({minLength: 1})).toMatchSnapshot();
    });

    it('renders with name="TEST"', () => {
        expect(textarea({name: "TEST"})).toMatchSnapshot();
    });

    it('renders with placeholder="TEST"', () => {
        expect(textarea({placeholder: "TEST"})).toMatchSnapshot();
    });

    it('renders with readOnly=true', () => {
        expect(textarea({readOnly: true})).toMatchSnapshot();
    });

    it('renders with readOnly=false', () => {
        expect(textarea({readOnly: false})).toMatchSnapshot();
    });

    it('renders with required=true', () => {
        expect(textarea({required: true})).toMatchSnapshot();
    });

    it('renders with required=false', () => {
        expect(textarea({required: false})).toMatchSnapshot();
    });

    it('renders with rows=1', () => {
        expect(textarea({rows: 1})).toMatchSnapshot();
    });

    it('renders with wrap="soft"', () => {
        expect(textarea({wrap: "soft"})).toMatchSnapshot();
    });

    it('renders with wrap="hard"', () => {
        expect(textarea({wrap: "hard"})).toMatchSnapshot();
    });
});