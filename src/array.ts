import { isNil } from './structural';

function isArray(array: any): boolean {
  return !isNil(array) && array.constructor === Array;
}

export {
  isArray
};
