import { Operator } from './types';
import { operations } from './utils';

function isArray(array: any, operator?: Operator|null, length?: number|null): boolean {
  return array?.constructor === Array && (length ? operations[operator as Operator](array.length, length) : true);
}

export {
  isArray
};
