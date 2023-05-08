import { isNumeric, getTag } from './internal';
import { isArray } from './array';

function isBoolean(bool: any): boolean {
  return typeof bool === "boolean";
}

function isString(string: any): boolean {
  return typeof string === "string";
}

function isNumber(number: any, typeCheck: boolean = true): boolean {
  return isSymbol(number) || isArray(number) ? false : typeCheck ? Number(number) === number : isNumeric(number);
}

function isValidNumber( number: any, 
                        min: number = -999999999, 
                        max: number = 999999999,
                        typeCheck: boolean = true ): boolean {
  return isNumber(number, typeCheck) && number >= min && number <= max ? true : false;
}

function isSymbol(sym: any): boolean {
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
