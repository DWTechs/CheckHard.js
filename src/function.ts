import { getTag } from './internal';

function isFunction(func: any): func is Function {
  return Boolean(func && getTag(func) === "[object Function]");
}

export {
  isFunction
};
