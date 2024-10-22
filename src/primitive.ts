import { isNumeric, getTag } from './internal';

function isBoolean(b: any): b is boolean {
  return typeof b === "boolean";
}

function isString(s: any, empty = false): s is string {
  return typeof s === "string" && (empty ? !!s : true);
}

function isNumber(n: any, type = true): n is number {
  return !isSymbol(n) && !(n?.constructor === Array) && (type ? Number(n) === n : isNumeric(n));
}

function isSymbol(s: any): s is symbol {
  const type = typeof s;
  return type === 'symbol' || (type === 'object' && s != null && getTag(s) === '[object Symbol]');
}

export {
  isBoolean,
  isString,
  isNumber,
  isSymbol,
};
