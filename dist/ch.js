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

function isNumeric(n) {
  return !isNaN(n - parseFloat(n));
}
function getTag(t) {
  return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
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

function isArray(a, comp, len) {
  return (a === null || a === void 0 ? void 0 : a.constructor) === Array && (comp && len && comparisons.hasOwnProperty(comp) ? comparisons[comp](a.length, len) : true);
}

function isBoolean(b) {
  return typeof b === "boolean";
}
function isString(s) {
  return typeof s === "string";
}
function isNumber(n, type) {
  if (type === void 0) {
    type = true;
  }
  return !isSymbol(n) && !isArray(n) && (type ? Number(n) === n : isNumeric(n));
}
function isValidNumber(n, min, max, type) {
  if (min === void 0) {
    min = -999999999;
  }
  if (max === void 0) {
    max = 999999999;
  }
  if (type === void 0) {
    type = true;
  }
  return isNumber(n, type) && n >= min && n <= max;
}
function isSymbol(s) {
  var type = typeof s;
  return type == 'symbol' || type === 'object' && s != null && getTag(s) == '[object Symbol]';
}

function isFunction(func) {
  return Boolean(func && getTag(func) === "[object Function]");
}

function isObject(o) {
  return o !== null && typeof o === "object" && !isArray(o);
}
function isNil(n) {
  return n == null;
}

function isAscii(c, ext) {
  if (ext === void 0) {
    ext = true;
  }
  return isInteger(c, false) && (ext && c >= 0 && c <= 255 || c >= 0 && c <= 127);
}
function isInteger(n, check) {
  if (check === void 0) {
    check = true;
  }
  if (isSymbol(n) || isArray(n)) return false;
  var _int = parseInt(n, 10);
  return check ? n === _int : n == _int;
}
function isFloat(n, type) {
  if (type === void 0) {
    type = true;
  }
  if (isSymbol(n)) return false;
  var modulo = n % 1 !== 0;
  return type ? Number(n) === n && modulo : Number(n) == n && modulo;
}
function isEven(n, type) {
  if (type === void 0) {
    type = true;
  }
  return isInteger(n, type) && !(n & 1);
}
function isOdd(n, type) {
  if (type === void 0) {
    type = true;
  }
  return isInteger(n, type) && Boolean(n & 1);
}
function isOrigin(n, type) {
  if (type === void 0) {
    type = true;
  }
  return type ? n === 0 : n == 0;
}
function isPositive(n, type) {
  if (type === void 0) {
    type = true;
  }
  return isNumber(n, type) && n > 0;
}
function isNegative(n, type) {
  if (type === void 0) {
    type = true;
  }
  return isNumber(n, type) && n < 0;
}
function isPowerOfTwo(n, type) {
  if (type === void 0) {
    type = true;
  }
  return isInteger(n, type) && !isOrigin(n, type) && (n & n - 1) === 0;
}

function isJson(s) {
  if (!isString(s)) return false;
  try {
    JSON.parse(s);
  } catch (e) {
    return false;
  }
  return true;
}
function isRegex(r, type) {
  if (type === void 0) {
    type = true;
  }
  if (type) return r instanceof RegExp;
  try {
    new RegExp(r);
  } catch (e) {
    return false;
  }
  return true;
}
var emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(e) {
  return !isSymbol(e) && emailReg.test(String(e).toLowerCase());
}
var ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(i) {
  return !isSymbol(i) && ipReg.test(i);
}
var slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(s) {
  return isString(s) && slugReg.test(s);
}
var upperCaseReg = /[A-Z]+/;
function containsUpperCase(s) {
  return isString(s) && upperCaseReg.test(s);
}
var lowerCaseReg = /[a-z]+/;
function containsLowerCase(s) {
  return isString(s) && lowerCaseReg.test(s);
}
var specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s) {
  return isString(s) && specialReg.test(s);
}
var hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(s) {
  return isString(s) && hexadecimal.test(s);
}
var numberReg = /\d/;
var lengthReg = /[^0-9]/g;
function containsNumber(s, min, max) {
  if (numberReg.test(s)) {
    var isMin = true;
    var isMax = true;
    if (isString(s)) {
      if (min) isMin = s.replace(lengthReg, '').length >= min;
      if (max) isMax = s.replace(lengthReg, '').length <= max;
    } else if (min) isMin = min <= 1;
    return isMin && isMax;
  }
  return false;
}

function isHtmlElement(h) {
  return Boolean(typeof HTMLElement === "object" ? h instanceof HTMLElement : h && typeof h === "object" && h.nodeType === 1 && typeof h.nodeName === "string");
}
function isHtmlEventAttribute(h) {
  switch (h) {
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
function isNode(n) {
  return Boolean(typeof Node === "object" ? n instanceof Node : n && typeof n === "object" && typeof n.nodeType === "number" && typeof n.nodeName === "string");
}

function isDate(d) {
  return !isNaN(d) && d instanceof Date;
}
var minDate = new Date('1/1/1900');
var maxDate = new Date('1/1/2200');
function isValidDate(d, min, max) {
  if (min === void 0) {
    min = minDate;
  }
  if (max === void 0) {
    max = maxDate;
  }
  return isDate(d) && d >= min && d <= max;
}
function isTimestamp(t, type) {
  if (type === void 0) {
    type = true;
  }
  return isInteger(t, type) && isNumeric(new Date(parseInt(t + '')).getTime());
}
function isValidTimestamp(t, min, max, type) {
  if (min === void 0) {
    min = -2208989361000;
  }
  if (max === void 0) {
    max = 7258114800000;
  }
  if (type === void 0) {
    type = true;
  }
  return isTimestamp(t, type) && t >= min && t <= max;
}

export { containsLowerCase, containsNumber, containsSpecialCharacter, containsUpperCase, isArray, isAscii, isBoolean, isDate, isEmail, isEven, isFloat, isFunction, isHexadecimal, isHtmlElement, isHtmlEventAttribute, isInteger, isIpAddress, isJson, isNegative, isNil, isNode, isNumber, isObject, isOdd, isOrigin, isPositive, isPowerOfTwo, isRegex, isSlug, isString, isSymbol, isTimestamp, isValidDate, isValidNumber, isValidTimestamp };
