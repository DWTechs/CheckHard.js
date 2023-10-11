import { isNumeric, getTag } from './internal';
import { isArray } from './array';

function isBoolean(bool: any): bool is boolean {
  return typeof bool === "boolean";
}

function isString(str: any): str is string {
  return typeof str === "string";
}

function isNumber(num: any, typeCheck = true): num is number {
  return isSymbol(num) || isArray(num) ? false : typeCheck ? Number(num) === num : isNumeric(num);
}

function isValidNumber( num: any, 
                        min = -999999999, 
                        max = 999999999,
                        typeCheck = true ): num is number {
  return isNumber(num, typeCheck) && num >= min && num <= max ? true : false;
}

function isSymbol(sym: any): sym is Symbol {
  const type = typeof sym;
  return type == 'symbol' || (type === 'object' && sym != null && getTag(sym) == '[object Symbol]');
}


export {
  isBoolean,
  isString,
  isNumber,
  isValidNumber,
  isSymbol

};
