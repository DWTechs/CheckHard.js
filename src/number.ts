import { isNumber, isSymbol } from './primitive';
import { isArray } from './array';

function isAscii(code: any, extended = true): code is number {
  if (isInteger(code, false))
    return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
  
  return false;
}

function isInteger(num: any, typeCheck = true): num is number {
  if (isSymbol(num) || isArray(num))
    return false;
  
  const int = parseInt(<string>num, 10);
  return typeCheck ? num === int : num == int;
}

function isFloat(num: any, typeCheck = true): num is number {
  if (isSymbol(num))
    return false;
  
  const moduloCheck = num % 1 !== 0;
  return typeCheck ? (Number(num) === num && moduloCheck) : (Number(num) == num && moduloCheck);
}

function isEven(num: any, typeCheck = true): num is number {
  return isInteger(num, typeCheck) && !(num & 1);
}

function isOdd(num: any, typeCheck = true): num is number {
  return isInteger(num, typeCheck) && num & 1 ? true : false;
}

function isOrigin(num: any, typeCheck = true): num is number {
  return typeCheck ? (num === 0 ? true : false) : (num == 0 ? true : false);
}

function isPositive(num: any, typeCheck = true): num is number {
  return isNumber(num, typeCheck) && num > 0 ? true : false;
}

function isNegative(num: any, typeCheck = true): num is number {
  return isNumber(num, typeCheck) && num < 0 ? true : false;
}

function isPowerOfTwo(num: any, typeCheck = true): num is number {
  return isInteger(num, typeCheck) && !isOrigin(num, typeCheck) && (num & (num - 1)) === 0;
}

export {
  isAscii,
  isInteger,
  isFloat,
  isEven,
  isOdd,
  isOrigin,
  isPositive,
  isNegative,
  isPowerOfTwo
};
