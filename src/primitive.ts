import { isNumeric, getTag } from './internal';

function isBoolean(bool: any): boolean {
  return typeof bool === "boolean";
}

function isString(string: any): boolean {
  return typeof string === "string";
}

function isNumber(number: any, typeCheck: boolean = true): boolean {
  if (isSymbol(number)) {
    return false;
  }
  return typeCheck ? Number(number) === number : isNumeric(number);
}

function isSymbol(sym: any): boolean {
  const type = typeof sym;
  return type == 'symbol' || (type === 'object' && sym != null && getTag(sym) == '[object Symbol]');
}


export {
  isBoolean,
  isString,
  isNumber,
  isSymbol

};
