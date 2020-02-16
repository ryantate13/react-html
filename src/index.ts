import {
    createElement,
    ReactNode,
    Fragment,
    DetailedHTMLProps,
    AnchorHTMLAttributes,
    HTMLAttributes,
    AreaHTMLAttributes,
    AudioHTMLAttributes,
    BaseHTMLAttributes,
    BlockquoteHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColHTMLAttributes,
    ColgroupHTMLAttributes,
    DataHTMLAttributes,
    DelHTMLAttributes,
    DetailsHTMLAttributes,
    DialogHTMLAttributes,
    EmbedHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    HtmlHTMLAttributes,
    IframeHTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    InsHTMLAttributes,
    KeygenHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes,
    LinkHTMLAttributes,
    MapHTMLAttributes,
    MenuHTMLAttributes,
    MetaHTMLAttributes,
    MeterHTMLAttributes,
    ObjectHTMLAttributes,
    OlHTMLAttributes,
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    OutputHTMLAttributes,
    ParamHTMLAttributes,
    ProgressHTMLAttributes,
    QuoteHTMLAttributes,
    ScriptHTMLAttributes,
    SelectHTMLAttributes,
    SourceHTMLAttributes,
    StyleHTMLAttributes,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    ThHTMLAttributes,
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
    WebViewHTMLAttributes,
} from 'react';

export function _(...children: Array<ReactNode | ReactNode[]>) {
    return createElement(Fragment, {}, ...children);
}

export function a(attributes:  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('a', attributes, ...children);
}

export function abbr(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('abbr', attributes, ...children);
}

export function address(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('address', attributes, ...children);
}

export function area(attributes:  DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement> | null = {}) {
    return createElement('area', attributes);
}

export function article(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('article', attributes, ...children);
}

export function aside(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('aside', attributes, ...children);
}

export function audio(attributes:  DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('audio', attributes, ...children);
}

export function b(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('b', attributes, ...children);
}

export function base(attributes:  DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement> | null = {}) {
    return createElement('base', attributes);
}

export function bdi(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('bdi', attributes, ...children);
}

export function bdo(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('bdo', attributes, ...children);
}

export function big(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('big', attributes, ...children);
}

export function blockquote(attributes:  DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('blockquote', attributes, ...children);
}

export function body(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('body', attributes, ...children);
}

export function br(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement> | null = {}) {
    return createElement('br', attributes);
}

export function button(attributes:  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('button', attributes, ...children);
}

export function canvas(attributes:  DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('canvas', attributes, ...children);
}

export function caption(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('caption', attributes, ...children);
}

export function cite(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('cite', attributes, ...children);
}

export function code(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('code', attributes, ...children);
}

export function col(attributes:  DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | null = {}) {
    return createElement('col', attributes);
}

export function colgroup(attributes:  DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('colgroup', attributes, ...children);
}

export function data(attributes:  DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('data', attributes, ...children);
}

export function datalist(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('datalist', attributes, ...children);
}

export function dd(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('dd', attributes, ...children);
}

export function del(attributes:  DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('del', attributes, ...children);
}

export function details(attributes:  DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('details', attributes, ...children);
}

export function dfn(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('dfn', attributes, ...children);
}

export function dialog(attributes:  DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('dialog', attributes, ...children);
}

export function div(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('div', attributes, ...children);
}

export function dl(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('dl', attributes, ...children);
}

export function dt(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('dt', attributes, ...children);
}

export function em(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('em', attributes, ...children);
}

export function embed(attributes:  DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement> | null = {}) {
    return createElement('embed', attributes);
}

export function fieldset(attributes:  DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('fieldset', attributes, ...children);
}

export function figcaption(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('figcaption', attributes, ...children);
}

export function figure(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('figure', attributes, ...children);
}

export function footer(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('footer', attributes, ...children);
}

export function form(attributes:  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('form', attributes, ...children);
}

export function h1(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h1', attributes, ...children);
}

export function h2(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h2', attributes, ...children);
}

export function h3(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h3', attributes, ...children);
}

export function h4(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h4', attributes, ...children);
}

export function h5(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h5', attributes, ...children);
}

export function h6(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('h6', attributes, ...children);
}

export function head(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('head', attributes, ...children);
}

export function header(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('header', attributes, ...children);
}

export function hgroup(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('hgroup', attributes, ...children);
}

export function hr(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> | null = {}) {
    return createElement('hr', attributes);
}

export function html(attributes:  DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('html', attributes, ...children);
}

export function i(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('i', attributes, ...children);
}

export function iframe(attributes:  DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('iframe', attributes, ...children);
}

export function img(attributes:  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | null = {}) {
    return createElement('img', attributes);
}

export function input(attributes:  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | null = {}) {
    return createElement('input', attributes);
}

export function ins(attributes:  DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('ins', attributes, ...children);
}

export function kbd(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('kbd', attributes, ...children);
}

export function keygen(attributes:  DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('keygen', attributes, ...children);
}

export function label(attributes:  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('label', attributes, ...children);
}

export function legend(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('legend', attributes, ...children);
}

export function li(attributes:  DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('li', attributes, ...children);
}

export function link(attributes:  DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> | null = {}) {
    return createElement('link', attributes);
}

export function main(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('main', attributes, ...children);
}

export function map(attributes:  DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('map', attributes, ...children);
}

export function mark(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('mark', attributes, ...children);
}

export function menu(attributes:  DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('menu', attributes, ...children);
}

export function menuitem(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('menuitem', attributes, ...children);
}

export function meta(attributes:  DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | null = {}) {
    return createElement('meta', attributes);
}

export function meter(attributes:  DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('meter', attributes, ...children);
}

export function nav(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('nav', attributes, ...children);
}

export function noindex(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('noindex', attributes, ...children);
}

export function noscript(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('noscript', attributes, ...children);
}

export function object(attributes:  DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('object', attributes, ...children);
}

export function ol(attributes:  DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('ol', attributes, ...children);
}

export function optgroup(attributes:  DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('optgroup', attributes, ...children);
}

export function option(attributes:  DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('option', attributes, ...children);
}

export function output(attributes:  DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('output', attributes, ...children);
}

export function p(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('p', attributes, ...children);
}

export function param(attributes:  DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement> | null = {}) {
    return createElement('param', attributes);
}

export function picture(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('picture', attributes, ...children);
}

export function pre(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('pre', attributes, ...children);
}

export function progress(attributes:  DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('progress', attributes, ...children);
}

export function q(attributes:  DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('q', attributes, ...children);
}

export function rp(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('rp', attributes, ...children);
}

export function rt(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('rt', attributes, ...children);
}

export function ruby(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('ruby', attributes, ...children);
}

export function s(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('s', attributes, ...children);
}

export function samp(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('samp', attributes, ...children);
}

export function script(attributes:  DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('script', attributes, ...children);
}

export function section(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('section', attributes, ...children);
}

export function select(attributes:  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('select', attributes, ...children);
}

export function small(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('small', attributes, ...children);
}

export function source(attributes:  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement> | null = {}) {
    return createElement('source', attributes);
}

export function span(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('span', attributes, ...children);
}

export function strong(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('strong', attributes, ...children);
}

export function style(attributes:  DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('style', attributes, ...children);
}

export function sub(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('sub', attributes, ...children);
}

export function summary(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('summary', attributes, ...children);
}

export function sup(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('sup', attributes, ...children);
}

export function table(attributes:  DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('table', attributes, ...children);
}

export function template(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('template', attributes, ...children);
}

export function tbody(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('tbody', attributes, ...children);
}

export function td(attributes:  DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('td', attributes, ...children);
}

export function textarea(attributes:  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('textarea', attributes, ...children);
}

export function tfoot(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('tfoot', attributes, ...children);
}

export function th(attributes:  DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('th', attributes, ...children);
}

export function thead(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('thead', attributes, ...children);
}

export function time(attributes:  DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('time', attributes, ...children);
}

export function title(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('title', attributes, ...children);
}

export function tr(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('tr', attributes, ...children);
}

export function track(attributes:  DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement> | null = {}) {
    return createElement('track', attributes);
}

export function u(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('u', attributes, ...children);
}

export function ul(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('ul', attributes, ...children);
}

export function video(attributes:  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('video', attributes, ...children);
}

export function wbr(attributes:  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | null = {}) {
    return createElement('wbr', attributes);
}

export function webview(attributes:  DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement> | null = {}, ...children: Array<ReactNode | ReactNode[]>) {
    return createElement('webview', attributes, ...children);
}
