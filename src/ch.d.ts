/*
MIT License

Copyright (c) 2009 DWTechs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/DWTechs/CheckHard.js
*/

export declare type Comparator = '='|'<'|'>'|'<='|'>=';

declare function isBoolean(bool: any): bool is boolean;
declare function isNil(nil: any): nil is null | undefined;
declare function isSymbol(sym: any): sym is Symbol;
declare function isJson(str: any): str is JSON;
declare function isFunction(func: any): func is Function;
declare function isObject<T = any>(obj: any): obj is object & T;
declare function isArray<T = any>(ar: any, comparator?: Comparator|null, length?: number|null): ar is Array<T>;
declare function isAscii(code: any, extended?: boolean): code is number;
declare function isInteger(num: any, typeCheck?: boolean): num is number;
declare function isFloat(num: any, typeCheck?: boolean): num is number;
declare function isNumber(num: any, typeCheck?: boolean): num is number;
declare function isValidNumber( num: any, min?: number, max?: number, typeCheck?: boolean): num is number;
declare function isString(str: any): str is string;
declare function isHtmlElement(htmlElement: any): boolean;
declare function isHtmlEventAttribute(htmlEventAttribute: any): boolean;
declare function isNode(node: any): boolean;
declare function isRegex(regex: any, typeCheck?: boolean): boolean;
declare function isEven(num: any, typeCheck?: boolean): boolean;
declare function isOdd(num: any, typeCheck?: boolean): boolean;
declare function isOrigin(num: any, typeCheck?: boolean): boolean;
declare function isPositive(num: any, typeCheck?: boolean): boolean;
declare function isNegative(num: any, typeCheck?: boolean): boolean;
declare function isPowerOfTwo(num: any, typeCheck?: boolean): boolean;
declare function isEmail(email: any): boolean;
declare function isIpAddress(ipAddress: any): boolean;
declare function isSlug(slug: any): boolean;
declare function isHexadecimal(str: any): boolean;
declare function containsUpperCase(str: any): boolean;
declare function containsLowerCase(str: any): boolean;
declare function containsSpecialCharacter(str: any): boolean;
declare function containsNumber(str: any, min?: number, max?: number): boolean;
declare function isDate(date: any): boolean;
declare function isValidDate(date: any, min?: Date, max?: Date): boolean;
declare function isTimestamp(ts:any): boolean;
declare function isValidTimestamp(ts: any, min?: number, max?: number): boolean;


export { isBoolean, 
         isNil,
         isSymbol,
         isJson,
         isFunction,
         isObject,
         isArray,
         isAscii,
         isInteger,
         isFloat,
         isNumber,
         isValidNumber,
         isString,
         isHtmlElement,
         isHtmlEventAttribute,
         isNode,
         isEven,
         isOdd,
         isOrigin,
         isPositive,
         isNegative,
         isPowerOfTwo,
         isRegex,
         isEmail,
         isIpAddress,
         isSlug,
         isHexadecimal,
         containsUpperCase,
         containsLowerCase,
         containsSpecialCharacter,
         containsNumber,
         isDate,
         isValidDate,
         isTimestamp,
         isValidTimestamp };