import { Comparator } from './types';
import { comparisons } from './utils';

function isArray<T = any>(ar: any, comparator?: Comparator|null, length?: number|null): ar is Array<T> {
  return ar?.constructor === Array && (length ? comparisons[comparator as Comparator](ar.length, length) : true);
}

// typing test : 

// interface User {
//   id: number;
// }

// function test(user: unknown) {
//   if (isArray<User>(user)) {
//     user.forEach(u => u);
//   }  
// }

export {
  isArray
};
