import {video} from '../src';

describe('video', () => {
    it('renders with children', () => {
        expect(video({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(video({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(video()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(video({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(video({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(video({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(video({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(video({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(video({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(video({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(video({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(video({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(video({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(video({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(video({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(video({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(video({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(video({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(video({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(video({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(video({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(video({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(video({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(video({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(video({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(video({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(video({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(video({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(video({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(video({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(video({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(video({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(video({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(video({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(video({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(video({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(video({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(video({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(video({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(video({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(video({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(video({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(video({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(video({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(video({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(video({translate: "no"})).toMatchSnapshot();
    });

    it('renders with autoPlay="true"', () => {
        expect(video({autoPlay: true})).toMatchSnapshot();
    });

    it('renders with autoPlay="false"', () => {
        expect(video({autoPlay: false})).toMatchSnapshot();
    });

    it('renders with controls="true"', () => {
        expect(video({controls: true})).toMatchSnapshot();
    });

    it('renders with controls="false"', () => {
        expect(video({controls: false})).toMatchSnapshot();
    });

    it('renders with crossOrigin="anonymous"', () => {
        expect(video({crossOrigin: "anonymous"})).toMatchSnapshot();
    });

    it('renders with crossOrigin="use-credentials"', () => {
        expect(video({crossOrigin: "use-credentials"})).toMatchSnapshot();
    });

    it('renders with height="1"', () => {
        expect(video({height: 1})).toMatchSnapshot();
    });

    it('renders with loop="true"', () => {
        expect(video({loop: true})).toMatchSnapshot();
    });

    it('renders with loop="false"', () => {
        expect(video({loop: false})).toMatchSnapshot();
    });

    it('renders with muted="true"', () => {
        expect(video({muted: true})).toMatchSnapshot();
    });

    it('renders with muted="false"', () => {
        expect(video({muted: false})).toMatchSnapshot();
    });

    it('renders with playsinline="true"', () => {
        expect(video({playsinline: true})).toMatchSnapshot();
    });

    it('renders with playsinline="false"', () => {
        expect(video({playsinline: false})).toMatchSnapshot();
    });

    it('renders with poster="https://google.com/"', () => {
        expect(video({poster: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with preload="none"', () => {
        expect(video({preload: "none"})).toMatchSnapshot();
    });

    it('renders with preload="metadata"', () => {
        expect(video({preload: "metadata"})).toMatchSnapshot();
    });

    it('renders with preload="auto"', () => {
        expect(video({preload: "auto"})).toMatchSnapshot();
    });

    it('renders with src="https://google.com/"', () => {
        expect(video({src: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with width="1"', () => {
        expect(video({width: 1})).toMatchSnapshot();
    });
});