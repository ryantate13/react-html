import {ol} from '../src';

describe('ol', () => {
    it('renders with children', () => {
        expect(ol({}, 'TEST')).toMatchSnapshot();
    });

    it('renders with empty attributes', () => {
        expect(ol({})).toMatchSnapshot();
    });

    it('renders without attributes', () => {
        expect(ol()).toMatchSnapshot();
    });

    it('renders with accessKey="a,b,c,d"', () => {
        expect(ol({accessKey: "a,b,c,d"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="on"', () => {
        expect(ol({autoCapitalize: "on"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="off"', () => {
        expect(ol({autoCapitalize: "off"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="none"', () => {
        expect(ol({autoCapitalize: "none"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="sentences"', () => {
        expect(ol({autoCapitalize: "sentences"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="words"', () => {
        expect(ol({autoCapitalize: "words"})).toMatchSnapshot();
    });

    it('renders with autoCapitalize="characters"', () => {
        expect(ol({autoCapitalize: "characters"})).toMatchSnapshot();
    });

    it('renders with className="foo bar baz"', () => {
        expect(ol({className: "foo bar baz"})).toMatchSnapshot();
    });

    it('renders with contentEditable="true"', () => {
        expect(ol({contentEditable: "true"})).toMatchSnapshot();
    });

    it('renders with contentEditable="false"', () => {
        expect(ol({contentEditable: "false"})).toMatchSnapshot();
    });

    it('renders with dir="ltr"', () => {
        expect(ol({dir: "ltr"})).toMatchSnapshot();
    });

    it('renders with dir="rtl"', () => {
        expect(ol({dir: "rtl"})).toMatchSnapshot();
    });

    it('renders with dir="auto"', () => {
        expect(ol({dir: "auto"})).toMatchSnapshot();
    });

    it('renders with draggable="true"', () => {
        expect(ol({draggable: "true"})).toMatchSnapshot();
    });

    it('renders with draggable="false"', () => {
        expect(ol({draggable: "false"})).toMatchSnapshot();
    });

    it('renders with hidden="true"', () => {
        expect(ol({hidden: true})).toMatchSnapshot();
    });

    it('renders with hidden="false"', () => {
        expect(ol({hidden: false})).toMatchSnapshot();
    });

    it('renders with id="TEST"', () => {
        expect(ol({id: "TEST"})).toMatchSnapshot();
    });

    it('renders with inputMode="none"', () => {
        expect(ol({inputMode: "none"})).toMatchSnapshot();
    });

    it('renders with inputMode="text"', () => {
        expect(ol({inputMode: "text"})).toMatchSnapshot();
    });

    it('renders with inputMode="tel"', () => {
        expect(ol({inputMode: "tel"})).toMatchSnapshot();
    });

    it('renders with inputMode="email"', () => {
        expect(ol({inputMode: "email"})).toMatchSnapshot();
    });

    it('renders with inputMode="url"', () => {
        expect(ol({inputMode: "url"})).toMatchSnapshot();
    });

    it('renders with inputMode="numeric"', () => {
        expect(ol({inputMode: "numeric"})).toMatchSnapshot();
    });

    it('renders with inputMode="decimal"', () => {
        expect(ol({inputMode: "decimal"})).toMatchSnapshot();
    });

    it('renders with inputMode="search"', () => {
        expect(ol({inputMode: "search"})).toMatchSnapshot();
    });

    it('renders with is="foo"', () => {
        expect(ol({is: "foo"})).toMatchSnapshot();
    });

    it('renders with itemID="https://google.com/"', () => {
        expect(ol({itemID: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemProp="https://google.com/"', () => {
        expect(ol({itemProp: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with itemRef="foo bar"', () => {
        expect(ol({itemRef: "foo bar"})).toMatchSnapshot();
    });

    it('renders with itemScope="true"', () => {
        expect(ol({itemScope: true})).toMatchSnapshot();
    });

    it('renders with itemScope="false"', () => {
        expect(ol({itemScope: false})).toMatchSnapshot();
    });

    it('renders with itemType="https://google.com/"', () => {
        expect(ol({itemType: "https://google.com/"})).toMatchSnapshot();
    });

    it('renders with lang="es-419"', () => {
        expect(ol({lang: "es-419"})).toMatchSnapshot();
    });

    it('renders with lang=""', () => {
        expect(ol({lang: ""})).toMatchSnapshot();
    });

    it('renders with slot="TEST"', () => {
        expect(ol({slot: "TEST"})).toMatchSnapshot();
    });

    it('renders with spellCheck="true"', () => {
        expect(ol({spellCheck: "true"})).toMatchSnapshot();
    });

    it('renders with spellCheck="false"', () => {
        expect(ol({spellCheck: "false"})).toMatchSnapshot();
    });

    it('renders with style="[object Object]"', () => {
        expect(ol({style: {"color":"#000000"}})).toMatchSnapshot();
    });

    it('renders with tabIndex="1"', () => {
        expect(ol({tabIndex: 1})).toMatchSnapshot();
    });

    it('renders with title="TEST"', () => {
        expect(ol({title: "TEST"})).toMatchSnapshot();
    });

    it('renders with translate="yes"', () => {
        expect(ol({translate: "yes"})).toMatchSnapshot();
    });

    it('renders with translate="no"', () => {
        expect(ol({translate: "no"})).toMatchSnapshot();
    });

    it('renders with reversed="true"', () => {
        expect(ol({reversed: true})).toMatchSnapshot();
    });

    it('renders with reversed="false"', () => {
        expect(ol({reversed: false})).toMatchSnapshot();
    });

    it('renders with start="1"', () => {
        expect(ol({start: 1})).toMatchSnapshot();
    });

    it('renders with type="1"', () => {
        expect(ol({type: "1"})).toMatchSnapshot();
    });

    it('renders with type="a"', () => {
        expect(ol({type: "a"})).toMatchSnapshot();
    });

    it('renders with type="A"', () => {
        expect(ol({type: "A"})).toMatchSnapshot();
    });

    it('renders with type="i"', () => {
        expect(ol({type: "i"})).toMatchSnapshot();
    });

    it('renders with type="I"', () => {
        expect(ol({type: "I"})).toMatchSnapshot();
    });
});