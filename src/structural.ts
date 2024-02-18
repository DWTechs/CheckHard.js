import { isArray } from './array';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

// typing test : 

// class User {
//   id = 1;
// }

// function test(user: unknown) {
//   if (isObject<User>(user)) {
//     user;
//   }  
// }


function isNil(n: any): n is null | undefined {
  return n == null;
}

export {
  isNil,
  isObject
};
