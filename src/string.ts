
import { isString, isSymbol } from './primitive';

function isJson(s: any): s is JSON {
  if (!isString(s))
    return false;

  try {
    JSON.parse(s);
  } catch (e) {
    return false;
  }
  return true;
}

function isRegex(r: any, type = true): r is RegExp {
  if (type)
    return r instanceof RegExp;
  
  try {
    new RegExp(r);
  } catch (e) {
    return false;
  }
  return true;
  
}

const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(e: any): e is string {
  return !isSymbol(e) && emailReg.test(String(e).toLowerCase());
}

// function isURL(url: any): boolean {

// }

// function isLocale(locale: any): boolean {

// }

const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(i: any): i is string {
  return !isSymbol(i) && ipReg.test(i);
}

// function isJWT(jwt: any): boolean {

// }

const slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(s: any): s is string {
  return isString(s) && slugReg.test(s);
}

const upperCaseReg = /[A-Z]+/;
function containsUpperCase(s: any): s is string {
  return isString(s) && upperCaseReg.test(s);
}

const lowerCaseReg = /[a-z]+/;
function containsLowerCase(s: any): s is string {
  return isString(s) && lowerCaseReg.test(s);
}

const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s: any): s is string {
  return isString(s) && specialReg.test(s);
}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(s: any): s is string {
  return isString(s) && hexadecimal.test(s);
}

const numberReg = /\d/;
const lengthReg = /[^0-9]/g;
function containsNumber(s: any, min?: number|null, max?: number|null): s is string {
  if (numberReg.test(s)) {
    let isMin = true;
    let isMax = true;
    if (isString(s)) {
      if (min)
        isMin = s.replace(lengthReg, '').length >= min;
      if (max)
        isMax = s.replace(lengthReg, '').length <= max;
    } else
      if (min)
        isMin = min <= 1;

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
