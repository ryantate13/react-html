import {area} from '../src';

describe('area', () => {

    it('renders with empty attributes', () => {
        expect(area({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(area()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(area({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(area({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(area({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(area({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(area({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(area({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(area({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(area({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(area({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(area({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(area({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(area({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(area({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(area({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(area({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden=true', () => {
        expect(area({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden=false', () => {
        expect(area({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(area({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(area({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(area({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(area({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(area({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(area({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(area({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(area({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(area({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(area({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(area({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(area({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(area({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope=true', () => {
        expect(area({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope=false', () => {
        expect(area({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(area({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(area({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(area({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(area({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(area({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(area({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style={"color":"#000000"}', () => {
        expect(area({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex=1', () => {
        expect(area({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(area({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(area({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(area({translate: "no"})).toMatchSnapshot();
    });

    it('renders with alt="TEST"', () => {
        expect(area({alt: "TEST"})).toMatchSnapshot();
    });

    it('renders with coords="0,0,82,126"', () => {
        expect(area({coords: "0,0,82,126"})).toMatchSnapshot();
    });

    it('renders with download="TEST"', () => {
        expect(area({download: "TEST"})).toMatchSnapshot();
    });

    it('renders with href="https://google.com/"', () => {
        expect(area({href: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with rel="a b c d"', () => {
        expect(area({rel: "a b c d"})).toMatchSnapshot();
    });

    it('renders with shape="circle"', () => {
        expect(area({shape: "circle"})).toMatchSnapshot();
    });

    it('renders with shape="default"', () => {
        expect(area({shape: "default"})).toMatchSnapshot();
    });

    it('renders with shape="poly"', () => {
        expect(area({shape: "poly"})).toMatchSnapshot();
    });

    it('renders with shape="rect"', () => {
        expect(area({shape: "rect"})).toMatchSnapshot();
    });

    it('renders with target="_blank"', () => {
        expect(area({target: "_blank"})).toMatchSnapshot();
    });
});