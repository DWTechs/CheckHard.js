
import { isString, isSymbol } from './primitive';

function isJson(str: any): boolean /*Object|SyntaxError|TypeError*/ {
  if (!isString(str)) {
    return false;
    //return new TypeError('Parameter should be of type string');
  }
  // let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
    //return e;
  }
  return true;
}

function isRegex(regex: any, typeCheck: boolean = true): boolean {
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

function isEmail(email: any): boolean {
  if (isSymbol(email)) {
    return false;
  }
  const regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regex.test(String(email).toLowerCase());
}

// function isURL(url: any): boolean {

// }

// function isLocale(locale: any): boolean {

// }

function isIpAddress(ipAddress: any): boolean {
  if (isSymbol(ipAddress)) {
    return false;
  }
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ipAddress);
}

// function isJWT(jwt: any): boolean {

// }

const slugRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(slug: any): boolean {
  return isString(slug) ? slugRegex.test(slug) : false;
}

const upperCaseRegex = /[A-Z]+/g;
function containsUpperCase(string: any): boolean {
  return isString(string) ? upperCaseRegex.test(string) : false;
}

const lowerCaseRegex = /[a-z]+/g;
function containsLowerCase(string: any): boolean {
  return isString(string) ? lowerCaseRegex.test(string) : false;
}

const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(string: any): boolean {
  return isString(string) ? specialRegex.test(string) : false;
}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(string: any): boolean {
  return isString(string) ? hexadecimal.test(string) : false;
}

export {
  isJson,
  isRegex,
  isEmail,
  isIpAddress,
  isSlug,
  isHexadecimal,
  containsUpperCase,
  containsLowerCase,
  containsSpecialCharacter
};
