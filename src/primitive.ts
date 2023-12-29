import { isNumeric, getTag } from './internal';
import { isArray } from './array';

function isBoolean(b: any): b is boolean {
  return typeof b === "boolean";
}

function isString(s: any, empty = false): s is string {
  return typeof s === "string" && (empty ? !!s : true);
}

function isNumber(n: any, type = true): n is number {
  return !isSymbol(n) && !isArray(n) && (type ? Number(n) === n : isNumeric(n));
}

function isValidNumber( n: any, 
                        min = -999999999, 
                        max = 999999999,
                        type = true ): n is number {
  return isNumber(n, type) && n >= min && n <= max;
}

function isSymbol(s: any): s is Symbol {
  const type = typeof s;
  return type == 'symbol' || (type === 'object' && s != null && getTag(s) == '[object Symbol]');
}


export {
  isBoolean,
  isString,
  isNumber,
  isValidNumber,
  isSymbol

};
