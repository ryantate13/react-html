import {audio} from '../src';

describe('audio', () => {
    it('renders with children', () => {
        expect(audio({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(audio({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(audio()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(audio({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(audio({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(audio({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(audio({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(audio({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(audio({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(audio({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(audio({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(audio({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(audio({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(audio({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(audio({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(audio({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(audio({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(audio({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(audio({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(audio({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(audio({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(audio({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(audio({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(audio({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(audio({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(audio({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(audio({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(audio({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(audio({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(audio({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(audio({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(audio({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(audio({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(audio({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(audio({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(audio({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(audio({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(audio({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(audio({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(audio({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(audio({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(audio({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(audio({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(audio({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(audio({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(audio({translate: "no"})).toMatchSnapshot();
    });

    it('renders with autoPlay="true"', () => {
        expect(audio({autoPlay: true})).toMatchSnapshot();
    });

    it('renders with autoPlay="false"', () => {
        expect(audio({autoPlay: false})).toMatchSnapshot();
    });

    it('renders with controls="true"', () => {
        expect(audio({controls: true})).toMatchSnapshot();
    });

    it('renders with controls="false"', () => {
        expect(audio({controls: false})).toMatchSnapshot();
    });

    it('renders with crossOrigin="anonymous"', () => {
        expect(audio({crossOrigin: "anonymous"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="use-credentials"', () => {
        expect(audio({crossOrigin: "use-credentials"})).toMatchSnapshot();
    });

    it('renders with loop="true"', () => {
        expect(audio({loop: true})).toMatchSnapshot();
    });

    it('renders with loop="false"', () => {
        expect(audio({loop: false})).toMatchSnapshot();
    });

    it('renders with muted="true"', () => {
        expect(audio({muted: true})).toMatchSnapshot();
    });

    it('renders with muted="false"', () => {
        expect(audio({muted: false})).toMatchSnapshot();
    });

    it('renders with preload="none"', () => {
        expect(audio({preload: "none"})).toMatchSnapshot();
    });

    it('renders with preload="metadata"', () => {
        expect(audio({preload: "metadata"})).toMatchSnapshot();
    });

    it('renders with preload="auto"', () => {
        expect(audio({preload: "auto"})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(audio({src: "https://google.com/"})).toMatchSnapshot();
    });
});