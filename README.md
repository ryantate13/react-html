# react-html

Write react apps without JSX. Library exposes a function for each intrinsic HTML element and is more terse than JSX with corresponding closing tags.

Written in TypeScript with the appropriate type definitions for each element's attributes. Extensively tested with all valid element/attribute combinations per [WHATWG](https://html.spec.whatwg.org/multipage/indices.html). Applications and components built on these functions do not require the `.tsx` file extension or that a `jsx` setting be defined in `tsconfig.json`. Other JSX restrictions do not apply as well, for instance component names are free to start with a lower case letter.

## Installation

```shell script
npm i @ryantate/react-html
```

## Usage

### Syntax

    element({attributes} | null, ...children)

```typescript
import ReactDOM from 'react-dom';
import {div} from '@ryantate/react-html';

ReactDOM.render(
    document.getElementById('#root'),
    div({id: 'app'}) // OK
);

ReactDOM.render(
    document.getElementById('#root'),
    div({foo: 'bar'}) // Compile time error
);

// error TS2345: Argument of type '{ foo: string; }' is not assignable to parameter of type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. 
```

### Fragments

Fragments have a different signature in that they do not accept attributes. The function exposed from the library to render fragments is `_`. [Keyed fragments](https://reactjs.org/docs/create-fragment.html) are currently unsupported.

```typescript
import ReactDOM from 'react-dom';
import {_, div, a, h1} from '@ryantate/react-html';

ReactDOM.render(
    document.getElementById('#root'),
    _(
        div({className: 'example'}, 'hello world'),
        a({href: 'https://github.com/ryantate13/react-html'}, 'react-html'),
        h1(null, 'hello world'),
    )
);
```

## SVG Support

SVG support is currently a work in progress. There is adequate information in the sources this project is generated from to expose all SVG elements as functions, but there are cases where names conflict. An `<a>` tag is valid inside an `<svg>` element but take props of a different type than an html anchor. Eventually the goal is to make all svg elements available for import from `@ryantate/react-html/svg`. 

```typescript
import {a} from '@ryantate/react-html';
import {a as svga} from '@ryantate/react-html/svg';
```

## Regenerating Source Files

Sources are [generated](make.js) from `WHATWG` and `@types/react`. To regnerate the functions and test suites in the library, clone this repository and run `npm run make`.

```shell script
git clone git@github.com:ryantate13/react-html.git
cd react-html
npm run make
``` 

## Running the test suite

```shell script
git clone git@github.com:ryantate13/react-html.git
cd react-html
npm run make && npm test
``` 