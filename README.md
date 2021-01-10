[![License: MIT](https://img.shields.io/npm/l/@dwtechs/checkhard.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fcheckhard.svg)](https://www.npmjs.com/package/@dwtechs/checkhard)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/CheckHard.js)](https://www.npmjs.com/package/@dwtechs/checkhard)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/checkhard?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/checkhard)

- [Synopsis](#synopsis)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)

## Synopsis

**[CheckHard.js](https://github.com/DWTechs/CheckHard.js)** is an open source dynamic type checking library for Javascript and Node.js to test if a given variable is what it is supposed to be.
Function, object, ascii, boolean, integer, string, json, email...

## Installation

### npm

```bash
$ npm i @dwtechs/checkhard
```

### Yarn

```bash
$ yarn add @dwtechs/checkhard
```

## Usage

### ES6

```javascript
import { isFunction, isArray } from "@dwtechs/checkhard";

if (isFunction(variable)) {
  //variable is a function
}

if (!isArray(variable)) {
  //variable is not an array
}
```

### CommonJS

```javascript
const ch = require("@dwtechs/checkhard/dist/ch.cjs");

if (ch.isFunction(variable)) {
  //variable is a function
}

if (!ch.isArray(variable)) {
  //variable is not an array
}
```

### IIFE

```html
<script src="node-modules/@dwtechs/checkhard/dist/ch.iife.min.js"></script>
```

```javascript
if (CH.isFunction(variable)) {
  //variable is a function
}

if (!CH.isArray(variable)) {
  //variable is not an array
}
```

## API Reference


### Primitive

```javascript

isBoolean(bool: any): boolean {}

isString(string: any): boolean {}

// Check if a variable is a numeric value,
// If typeCheck = false values like '8e4', '+true', '0x44' return true
isNumber(number: any, typeCheck: boolean = true): boolean {}

isSymbol(sym: any): boolean {}

```


### Structural

```javascript

isFunction(func: any): boolean {}

isObject(obj: any): boolean {}

//Check whether val is null or undefined
isNil(val: any): boolean {}

```


### Number

```javascript

isInteger(number: any, typeCheck: boolean = true): boolean {}

isFloat(number: any, typeCheck: boolean = true): boolean {}

isEven(number: any, typeCheck: boolean = true): boolean {}

isOdd(number: any, typeCheck: boolean = true): boolean {}

isOrigin(number: any, typeCheck: boolean = true): boolean {}

isPositive(number: any, typeCheck: boolean = true): boolean {}

isNegative(number: any, typeCheck: boolean = true): boolean {}

isPowerOfTwo(number: any, typeCheck: boolean = true): boolean {}

isAscii(code: any, extended: boolean = false): boolean {}

```


### String

```javascript

isJson(string: any): boolean {}

isRegex(regex: any, typeCheck: boolean = true): boolean {}

isEmail(email: any): boolean {}

isIpAddress(ipAddress: any): boolean {}

```

### Array

```javascript

isArray(array: any): boolean {}

```

### Html

```javascript

isHtmlElement(htmlElement: any): boolean {}

isHtmlEventAttribute(htmlEventAttribute: any): boolean {}

isNode(node: any): boolean {}

```


## Contributors

CheckHard.js is still in development and we would be glad to get all the help you can provide.
To contribute please read **[contributor.md](https://github.com/DWTechs/CheckHard.js/blob/main/contributor.md)** for detailed installation guide.

## License

**[MIT](https://github.com/DWTechs/CheckHard.js/blob/main/LICENSE)**

## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| type checking   | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
