import { Comparator } from './types';
import { comparisons } from './utils';

function isArray(array: any, comparator?: Comparator|null, length?: number|null): boolean {
  return array?.constructor === Array && (length ? comparisons[comparator as Comparator](array.length, length) : true);
}

export {
  isArray
};
