
import { isString, isSymbol } from './primitive';

function isJson(str: any): str is JSON /*Object|SyntaxError|TypeError*/ {
  if (!isString(str))
    return false;

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function isRegex(regex: any, typeCheck = true): regex is RegExp {
  if (typeCheck)
    return regex instanceof RegExp ? true : false;
  
  try {
    new RegExp(regex);
  } catch (e) {
    return false;
  }
  return true;
  
}

function isEmail(email: any): email is string {
  if (isSymbol(email))
    return false;
  
  const regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regex.test(String(email).toLowerCase());
}

// function isURL(url: any): boolean {

// }

// function isLocale(locale: any): boolean {

// }

function isIpAddress(ipAddress: any): ipAddress is string {
  if (isSymbol(ipAddress))
    return false;
  
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ipAddress);
}

// function isJWT(jwt: any): boolean {

// }

const slugRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(slug: any): slug is string {
  return isString(slug) ? slugRegex.test(slug) : false;
}

const upperCaseRegex = /[A-Z]+/;
function containsUpperCase(str: any): str is string {
  return isString(str) ? upperCaseRegex.test(str) : false;
}

const lowerCaseRegex = /[a-z]+/;
function containsLowerCase(str: any): str is string {
  return isString(str) ? lowerCaseRegex.test(str) : false;
}

const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(str: any): str is string {
  return isString(str) ? specialRegex.test(str) : false;
}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(str: any): str is string {
  return isString(str) ? hexadecimal.test(str) : false;
}

const numberRegex = /\d/;
const lengthRegex = /[^0-9]/g;
function containsNumber(str: any, min?: number|null, max?: number|null): str is string {
  if (numberRegex.test(str)) {
    let isMin = true;
    let isMax = true;
    if (isString(str)) {
      if (min)
        isMin = str.replace(lengthRegex, '').length >= min ? true : false;
      if (max)
        isMax = str.replace(lengthRegex, '').length <= max ? true : false;
    } else
      if (min)
        isMin = min <= 1 ? true : false;

    return isMin && isMax;
  }
    
  return false; 
  
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
  containsSpecialCharacter,
  containsNumber
};
