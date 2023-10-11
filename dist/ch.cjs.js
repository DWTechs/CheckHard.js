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

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNumeric(num) {
    return !isNaN(num - parseFloat(num));
}
function getTag(tag) {
    if (tag == null)
        return tag === undefined ? '[object Undefined]' : '[object Null]';
    return toString.call(tag);
}

const comparisons = {
    '=': (a, b) => a == b,
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b
};

function isArray(ar, comparator, length) {
    return (ar === null || ar === void 0 ? void 0 : ar.constructor) === Array && (length ? comparisons[comparator](ar.length, length) : true);
}

function isBoolean(bool) {
    return typeof bool === "boolean";
}
function isString(str) {
    return typeof str === "string";
}
function isNumber(num, typeCheck = true) {
    return isSymbol(num) || isArray(num) ? false : typeCheck ? Number(num) === num : isNumeric(num);
}
function isValidNumber(num, min = -999999999, max = 999999999, typeCheck = true) {
    return isNumber(num, typeCheck) && num >= min && num <= max ? true : false;
}
function isSymbol(sym) {
    const type = typeof sym;
    return type == 'symbol' || (type === 'object' && sym != null && getTag(sym) == '[object Symbol]');
}

function isFunction(func) {
    if (func)
        return func && getTag(func) === "[object Function]";
    return false;
}
function isObject(obj) {
    return obj !== null && typeof obj === "object" && !isArray(obj);
}
function isNil(nil) {
    return nil == null;
}

function isAscii(code, extended = true) {
    if (isInteger(code, false))
        return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
    return false;
}
function isInteger(num, typeCheck = true) {
    if (isSymbol(num) || isArray(num))
        return false;
    const int = parseInt(num, 10);
    return typeCheck ? num === int : num == int;
}
function isFloat(num, typeCheck = true) {
    if (isSymbol(num))
        return false;
    const moduloCheck = num % 1 !== 0;
    return typeCheck ? (Number(num) === num && moduloCheck) : (Number(num) == num && moduloCheck);
}
function isEven(num, typeCheck = true) {
    return isInteger(num, typeCheck) && !(num & 1);
}
function isOdd(num, typeCheck = true) {
    return isInteger(num, typeCheck) && num & 1 ? true : false;
}
function isOrigin(num, typeCheck = true) {
    return typeCheck ? (num === 0 ? true : false) : (num == 0 ? true : false);
}
function isPositive(num, typeCheck = true) {
    return isNumber(num, typeCheck) && num > 0 ? true : false;
}
function isNegative(num, typeCheck = true) {
    return isNumber(num, typeCheck) && num < 0 ? true : false;
}
function isPowerOfTwo(num, typeCheck = true) {
    return isInteger(num, typeCheck) && !isOrigin(num, typeCheck) && (num & (num - 1)) === 0;
}

function isJson(str) {
    if (!isString(str))
        return false;
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isRegex(regex, typeCheck = true) {
    if (typeCheck)
        return regex instanceof RegExp ? true : false;
    else
        try {
            new RegExp(regex);
        }
        catch (e) {
            return false;
        }
    return true;
}
function isEmail(email) {
    if (isSymbol(email))
        return false;
    const regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regex.test(String(email).toLowerCase());
}
function isIpAddress(ipAddress) {
    if (isSymbol(ipAddress))
        return false;
    const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ipAddress);
}
const slugRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(slug) {
    return isString(slug) ? slugRegex.test(slug) : false;
}
const upperCaseRegex = /[A-Z]+/;
function containsUpperCase(str) {
    return isString(str) ? upperCaseRegex.test(str) : false;
}
const lowerCaseRegex = /[a-z]+/;
function containsLowerCase(str) {
    return isString(str) ? lowerCaseRegex.test(str) : false;
}
const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(str) {
    return isString(str) ? specialRegex.test(str) : false;
}
const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(str) {
    return isString(str) ? hexadecimal.test(str) : false;
}
const numberRegex = /\d/;
const lengthRegex = /[^0-9]/g;
function containsNumber(str, min, max) {
    if (numberRegex.test(str)) {
        let isMin = true;
        let isMax = true;
        if (isString(str)) {
            if (min)
                isMin = str.replace(lengthRegex, '').length >= min ? true : false;
            if (max)
                isMax = str.replace(lengthRegex, '').length <= max ? true : false;
        }
        else if (min)
            isMin = min <= 1 ? true : false;
        return isMin && isMax;
    }
    return false;
}

function isHtmlElement(htmlElement) {
    if (htmlElement) {
        return typeof HTMLElement === "object"
            ? htmlElement instanceof HTMLElement
            : htmlElement &&
                typeof htmlElement === "object" &&
                htmlElement !== null &&
                htmlElement.nodeType === 1 &&
                typeof htmlElement.nodeName === "string";
    }
    return false;
}
function isHtmlEventAttribute(htmlEventAttribute) {
    switch (htmlEventAttribute) {
        case "onafterprint":
        case "onbeforeprint":
        case "onbeforeunload":
        case "onerror":
        case "onhashchange":
        case "onload":
        case "onmessage":
        case "onoffline":
        case "ononline":
        case "onpagehide":
        case "onpageshow":
        case "onpopstate":
        case "onresize":
        case "onstorage":
        case "onunload":
        case "onblur":
        case "onchange":
        case "oncontextmenu":
        case "onfocus":
        case "oninput":
        case "oninvalid":
        case "onreset":
        case "onsearch":
        case "onselect":
        case "onsubmit":
        case "onkeydown":
        case "onkeypress":
        case "onkeyup":
        case "onclick":
        case "ondblclick":
        case "onmousedown":
        case "onmousemove":
        case "onmouseout":
        case "onmouseover":
        case "onmouseup":
        case "onmousewheel":
        case "onwheel":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondragstart":
        case "ondrop":
        case "onscroll":
        case "oncopy":
        case "oncut":
        case "onpaste":
        case "onabort":
        case "oncanplay":
        case "oncanplaythrough":
        case "oncuechange":
        case "ondurationchange":
        case "onemptied":
        case "onended":
        case "onerror":
        case "onloadeddata":
        case "onloadedmetadata":
        case "onloadstart":
        case "onpause":
        case "onplay":
        case "onplaying":
        case "onprogress":
        case "onratechange":
        case "onseeked":
        case "onseeking":
        case "onstalled":
        case "onsuspend":
        case "ontimeupdate":
        case "onvolumechange":
        case "onwaiting":
        case "ontoggle":
            return true;
        default:
            return false;
    }
}
function isNode(node) {
    if (node) {
        return typeof Node === "object"
            ? node instanceof Node
            : node &&
                typeof node === "object" &&
                typeof node.nodeType === "number" &&
                typeof node.nodeName === "string";
    }
    return false;
}

function isDate(date) {
    return !isNaN(date) && date instanceof Date;
}
const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(date, min = minDate, max = maxDate) {
    return isDate(date) && date >= min && date <= max ? true : false;
}
function isTimestamp(ts, typeCheck = true) {
    if (isInteger(ts, typeCheck))
        return isNumeric(new Date(parseInt(ts + '')).getTime());
    else
        return false;
}
function isValidTimestamp(ts, min = -2208989361000, max = 7258114800000, typeCheck = true) {
    return isTimestamp(ts, typeCheck) && ts >= min && ts <= max ? true : false;
}

exports.containsLowerCase = containsLowerCase;
exports.containsNumber = containsNumber;
exports.containsSpecialCharacter = containsSpecialCharacter;
exports.containsUpperCase = containsUpperCase;
exports.isArray = isArray;
exports.isAscii = isAscii;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isEmail = isEmail;
exports.isEven = isEven;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isHexadecimal = isHexadecimal;
exports.isHtmlElement = isHtmlElement;
exports.isHtmlEventAttribute = isHtmlEventAttribute;
exports.isInteger = isInteger;
exports.isIpAddress = isIpAddress;
exports.isJson = isJson;
exports.isNegative = isNegative;
exports.isNil = isNil;
exports.isNode = isNode;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isOrigin = isOrigin;
exports.isPositive = isPositive;
exports.isPowerOfTwo = isPowerOfTwo;
exports.isRegex = isRegex;
exports.isSlug = isSlug;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isTimestamp = isTimestamp;
exports.isValidDate = isValidDate;
exports.isValidNumber = isValidNumber;
exports.isValidTimestamp = isValidTimestamp;
