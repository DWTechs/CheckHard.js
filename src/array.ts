import { Operator } from './types';
import { operations } from './utils';

function isArray(array: any, operator: Operator = '=', length?: number|null): boolean {
  return array?.constructor === Array && (length ? operations[operator](array.length, length) : true);
}

export {
  isArray
};
