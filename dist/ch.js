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

function isNumeric(number) {
  return !isNaN(number - parseFloat(number));
}

function getTag(tag) {
  if (tag == null) {
    return tag === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(tag);
}

function isBoolean(bool) {
  return typeof bool === "boolean";
}

function isString(string) {
  return typeof string === "string";
}

function isNumber(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isSymbol(number) ? false : typeCheck ? Number(number) === number : isNumeric(number);
}

function isValidNumber(number, min, max, typeCheck) {
  if (min === void 0) {
    min = -999999999;
  }

  if (max === void 0) {
    max = 999999999;
  }

  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isNumber(number, typeCheck) && number >= min && number <= max ? true : false;
}

function isSymbol(sym) {
  var type = typeof sym;
  return type == 'symbol' || type === 'object' && sym != null && getTag(sym) == '[object Symbol]';
}

var comparisons = {
  '=': function _(a, b) {
    return a == b;
  },
  '<': function _(a, b) {
    return a < b;
  },
  '>': function _(a, b) {
    return a > b;
  },
  '<=': function _(a, b) {
    return a <= b;
  },
  '>=': function _(a, b) {
    return a >= b;
  }
};

function isArray(array, comparator, length) {
  return (array === null || array === void 0 ? void 0 : array.constructor) === Array && (length ? comparisons[comparator](array.length, length) : true);
}

function isFunction(func) {
  if (func) {
    return func && getTag(func) === "[object Function]";
  }

  return false;
}

function isObject(object) {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isNil(nil) {
  return nil == null;
}

function isAscii(code, extended) {
  if (extended === void 0) {
    extended = true;
  }

  if (isInteger(code, false)) {
    return extended && code >= 0 && code <= 255 || code >= 0 && code <= 127;
  }

  return false;
}

function isInteger(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  if (isSymbol(number)) {
    return false;
  }

  var _int = parseInt(number, 10);

  return typeCheck ? number === _int : number == _int;
}

function isFloat(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  if (isSymbol(number)) {
    return false;
  }

  var moduloCheck = number % 1 !== 0;
  return typeCheck ? Number(number) === number && moduloCheck : Number(number) == number && moduloCheck;
}

function isEven(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isInteger(number, typeCheck) && !(number & 1);
}

function isOdd(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isInteger(number, typeCheck) && number & 1 ? true : false;
}

function isOrigin(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return typeCheck ? number === 0 ? true : false : number == 0 ? true : false;
}

function isPositive(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isNumber(number, typeCheck) && number > 0 ? true : false;
}

function isNegative(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isNumber(number, typeCheck) && number < 0 ? true : false;
}

function isPowerOfTwo(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isInteger(number, typeCheck) && !isOrigin(number, typeCheck) && (number & number - 1) === 0;
}

function isJson(str) {
  if (!isString(str)) {
    return false;
  }

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

function isRegex(regex, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  if (typeCheck) {
    return regex instanceof RegExp ? true : false;
  } else {
    try {
      new RegExp(regex);
    } catch (e) {
      return false;
    }

    return true;
  }
}

function isEmail(email) {
  if (isSymbol(email)) {
    return false;
  }

  var regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regex.test(String(email).toLowerCase());
}

function isIpAddress(ipAddress) {
  if (isSymbol(ipAddress)) {
    return false;
  }

  var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ipAddress);
}

var slugRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;

function isSlug(slug) {
  return isString(slug) ? slugRegex.test(slug) : false;
}

var upperCaseRegex = /[A-Z]+/;

function containsUpperCase(string) {
  return isString(string) ? upperCaseRegex.test(string) : false;
}

var lowerCaseRegex = /[a-z]+/;

function containsLowerCase(string) {
  return isString(string) ? lowerCaseRegex.test(string) : false;
}

var specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;

function containsSpecialCharacter(string) {
  return isString(string) ? specialRegex.test(string) : false;
}

var hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;

function isHexadecimal(string) {
  return isString(string) ? hexadecimal.test(string) : false;
}

var numberRegex = /\d/;
var lengthRegex = /[^0-9]/g;

function containsNumber(string, min, max) {
  var containsNumber = numberRegex.test(string);

  if (containsNumber) {
    var isMin = true;
    var isMax = true;

    if (isString(string)) {
      if (min) {
        isMin = string.replace(lengthRegex, '').length >= min ? true : false;
      }

      if (max) {
        isMax = string.replace(lengthRegex, '').length <= max ? true : false;
      }
    } else {
      if (min) {
        isMin = min <= 1 ? true : false;
      }
    }

    return isMin && isMax;
  } else {
    return containsNumber;
  }
}

function isHtmlElement(htmlElement) {
  if (htmlElement) {
    return typeof HTMLElement === "object" ? htmlElement instanceof HTMLElement : htmlElement && typeof htmlElement === "object" && htmlElement !== null && htmlElement.nodeType === 1 && typeof htmlElement.nodeName === "string";
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
    return typeof Node === "object" ? node instanceof Node : node && typeof node === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string";
  }

  return false;
}

function isDate(date) {
  return !isNaN(date) && date instanceof Date;
}

var minDate = new Date('1/1/1900');
var maxDate = new Date('1/1/2200');

function isValidDate(date, min, max) {
  if (min === void 0) {
    min = minDate;
  }

  if (max === void 0) {
    max = maxDate;
  }

  return isDate(date) && date >= min && date <= max ? true : false;
}

function isTimestamp(timestamp) {
  if (isInteger(timestamp, false)) {
    var newTimestamp = new Date(parseInt(timestamp)).getTime();
    return isNumeric(newTimestamp);
  }

  return false;
}

function isValidTimestamp(timestamp, min, max) {
  if (min === void 0) {
    min = -2208989361000;
  }

  if (max === void 0) {
    max = 7258114800000;
  }

  return isTimestamp(timestamp) && timestamp >= min && timestamp <= max ? true : false;
}

export { containsLowerCase, containsNumber, containsSpecialCharacter, containsUpperCase, isArray, isAscii, isBoolean, isDate, isEmail, isEven, isFloat, isFunction, isHexadecimal, isHtmlElement, isHtmlEventAttribute, isInteger, isIpAddress, isJson, isNegative, isNil, isNode, isNumber, isObject, isOdd, isOrigin, isPositive, isPowerOfTwo, isRegex, isSlug, isString, isSymbol, isTimestamp, isValidDate, isValidNumber, isValidTimestamp };
