import { Comparator } from './types';
import { comparisons } from './utils';

function isArray<T = any>(a: any, comp?: Comparator|null, len?: number|null): a is Array<T> {
  return a?.constructor === Array && (comp && len && comparisons.hasOwnProperty(comp) ? comparisons[comp](a.length, len) : true);
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
