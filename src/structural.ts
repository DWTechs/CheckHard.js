import { getTag } from './internal';
import { isArray } from './array';

function isFunction(func: any): boolean {
  if (func) {
    return func && getTag(func) === "[object Function]";
  }
  return false;
}

function isObject(object: any): boolean {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isNil(nil: any): boolean {
  return nil == null;
}

export {
  isNil,
  isFunction,
  isObject
};
