import {iframe} from '../src';

describe('iframe', () => {
    it('renders with children', () => {
        expect(iframe({}, 'TEST')).toMatchSnapshot();
    });
    
    it('renders arrays of children', () => {
        expect(iframe({}, Array(10).fill('TEST'))).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(iframe({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(iframe()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(iframe({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(iframe({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(iframe({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(iframe({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(iframe({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(iframe({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(iframe({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(iframe({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(iframe({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(iframe({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(iframe({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(iframe({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(iframe({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(iframe({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(iframe({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(iframe({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(iframe({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(iframe({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(iframe({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(iframe({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(iframe({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(iframe({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(iframe({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(iframe({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(iframe({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(iframe({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(iframe({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(iframe({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(iframe({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(iframe({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(iframe({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(iframe({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(iframe({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(iframe({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(iframe({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(iframe({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(iframe({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(iframe({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(iframe({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(iframe({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(iframe({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(iframe({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(iframe({translate: "no"})).toMatchSnapshot();
    });

    it('renders with allow="self"', () => {
        expect(iframe({allow: "self"})).toMatchSnapshot();
    });

    it('renders with allowFullScreen=true', () => {
        expect(iframe({allowFullScreen: true})).toMatchSnapshot();
    });

    it('renders with allowFullScreen=false', () => {
        expect(iframe({allowFullScreen: false})).toMatchSnapshot();
    });

    it('renders with height=1', () => {
        expect(iframe({height: 1})).toMatchSnapshot();
    });

    it('renders with name="_blank"', () => {
        expect(iframe({name: "_blank"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-forms"', () => {
        expect(iframe({sandbox: "allow-forms"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-modals"', () => {
        expect(iframe({sandbox: "allow-modals"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-orientation-lock"', () => {
        expect(iframe({sandbox: "allow-orientation-lock"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-pointer-lock"', () => {
        expect(iframe({sandbox: "allow-pointer-lock"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-popups"', () => {
        expect(iframe({sandbox: "allow-popups"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-popups-to-escape-sandbox"', () => {
        expect(iframe({sandbox: "allow-popups-to-escape-sandbox"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-presentation"', () => {
        expect(iframe({sandbox: "allow-presentation"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-same-origin"', () => {
        expect(iframe({sandbox: "allow-same-origin"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-scripts"', () => {
        expect(iframe({sandbox: "allow-scripts"})).toMatchSnapshot();
    });

    it('renders with sandbox="allow-top-navigation"', () => {
        expect(iframe({sandbox: "allow-top-navigation"})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(iframe({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with srcDoc="iframe"', () => {
        expect(iframe({srcDoc: "iframe"})).toMatchSnapshot();
    });

    it('renders with srcDoc="srcdoc"', () => {
        expect(iframe({srcDoc: "srcdoc"})).toMatchSnapshot();
    });

    it('renders with width=1', () => {
        expect(iframe({width: 1})).toMatchSnapshot();
    });
});