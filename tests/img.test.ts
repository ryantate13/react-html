import {img} from '../src';

describe('img', () => {

    it('renders with empty attributes', () => {
        expect(img({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(img()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(img({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(img({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(img({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(img({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(img({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(img({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(img({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(img({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(img({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(img({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(img({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(img({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(img({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(img({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(img({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(img({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(img({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(img({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(img({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(img({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(img({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(img({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(img({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(img({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(img({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(img({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(img({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(img({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(img({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(img({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(img({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(img({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(img({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(img({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(img({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(img({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(img({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(img({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(img({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(img({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(img({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(img({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(img({translate: "no"})).toMatchSnapshot();
    });

    it('renders with alt="TEST"', () => {
        expect(img({alt: "TEST"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="anonymous"', () => {
        expect(img({crossOrigin: "anonymous"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="use-credentials"', () => {
        expect(img({crossOrigin: "use-credentials"})).toMatchSnapshot();
    });

    it('renders with decoding="sync"', () => {
        expect(img({decoding: "sync"})).toMatchSnapshot();
    });

    it('renders with decoding="async"', () => {
        expect(img({decoding: "async"})).toMatchSnapshot();
    });

    it('renders with decoding="auto"', () => {
        expect(img({decoding: "auto"})).toMatchSnapshot();
    });

    it('renders with height="1"', () => {
        expect(img({height: 1})).toMatchSnapshot();
    });

    it('renders with sizes=""', () => {
        expect(img({sizes: ""})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(img({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with srcSet="es-419"', () => {
        expect(img({srcSet: "es-419"})).toMatchSnapshot();
    });

    it('renders with useMap="#foo"', () => {
        expect(img({useMap: "#foo"})).toMatchSnapshot();
    });

    it('renders with width="1"', () => {
        expect(img({width: 1})).toMatchSnapshot();
    });
});