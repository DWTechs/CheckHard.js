import { isNil } from './structural';

function isArray(array: any, length?: number|null): boolean {
  return !isNil(array) && array.constructor === Array && (length ? array.length === length : true);
}

export {
  isArray
};
