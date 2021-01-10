/** MIT License
*
* Copyright (c) 2009 DWTechs
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* https://github.com/DWTechs/CheckHard.js
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

  if (isSymbol(number)) {
    return false;
  }

  return typeCheck ? Number(number) === number : isNumeric(number);
}

function isSymbol(sym) {
  var type = typeof sym;
  return type == 'symbol' || type === 'object' && sym != null && getTag(sym) == '[object Symbol]';
}

function isArray(array) {
  return !isNil(array) && array.constructor === Array;
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

export { isArray, isAscii, isBoolean, isEmail, isEven, isFloat, isFunction, isHtmlElement, isHtmlEventAttribute, isInteger, isIpAddress, isJson, isNegative, isNil, isNode, isNumber, isObject, isOdd, isOrigin, isPositive, isPowerOfTwo, isRegex, isString, isSymbol };
