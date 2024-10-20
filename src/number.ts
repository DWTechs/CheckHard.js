import { isNumber, isSymbol } from './primitive';

function isAscii(c: any, ext = true): c is number {
  return isInteger(c, false) && ((ext && c >= 0 && c <= 255) || (c >= 0 && c <= 127));
}

function isInteger(n: any, type = true): n is number {
  if (!isNumber(n, type))
    return false;
  
  const int = Number.parseInt(String(n), 10);
  return type ? n === int : n == int;
}

function isFloat(n: any, type = true): n is number {
  if (isSymbol(n))
    return false;
  
  const modulo = n % 1 !== 0;
  return type ? (Number(n) === n && modulo) : (Number(n) == n && modulo);
}

function isEven(n: any, type = true): n is number {
  return isInteger(n, type) && !(n & 1);
}

function isOdd(n: any, type = true): n is number {
  return isInteger(n, type) && Boolean(n & 1);
}

function isOrigin(n: any, type = true): n is number {
  return type ? n === 0 : n == 0;
}

function isPositive(n: any, type = true): n is number {
  return isNumber(n, type) && n > 0;
}

function isNegative(n: any, type = true): n is number {
  return isNumber(n, type) && n < 0;
}

function isPowerOfTwo(n: any, type = true): n is number {
  return isInteger(n, type) && !isOrigin(n, type) && (n & (n - 1)) === 0;
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
