import {track} from '../src';

describe('track', () => {

    it('renders with empty attributes', () => {
        expect(track({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(track()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(track({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(track({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(track({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(track({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(track({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(track({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(track({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(track({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(track({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(track({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(track({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(track({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(track({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(track({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(track({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(track({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(track({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(track({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(track({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(track({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(track({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(track({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(track({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(track({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(track({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(track({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(track({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(track({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(track({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(track({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(track({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(track({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(track({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(track({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(track({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(track({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(track({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(track({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(track({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(track({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(track({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(track({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(track({translate: "no"})).toMatchSnapshot();
    });

    it('renders with default=true', () => {
        expect(track({default: true})).toMatchSnapshot();
    });

    it('renders with default=false', () => {
        expect(track({default: false})).toMatchSnapshot();
    });

    it('renders with kind="subtitles"', () => {
        expect(track({kind: "subtitles"})).toMatchSnapshot();
    });

    it('renders with kind="captions"', () => {
        expect(track({kind: "captions"})).toMatchSnapshot();
    });

    it('renders with kind="descriptions"', () => {
        expect(track({kind: "descriptions"})).toMatchSnapshot();
    });

    it('renders with kind="chapters"', () => {
        expect(track({kind: "chapters"})).toMatchSnapshot();
    });

    it('renders with kind="metadata"', () => {
        expect(track({kind: "metadata"})).toMatchSnapshot();
    });

    it('renders with label="TEST"', () => {
        expect(track({label: "TEST"})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(track({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with srcLang="es-419"', () => {
        expect(track({srcLang: "es-419"})).toMatchSnapshot();
    });
});