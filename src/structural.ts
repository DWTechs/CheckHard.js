import { getTag } from './internal';
import { isArray } from './array';

function isFunction(func: any): func is Function {
  if (func)
    return func && getTag(func) === "[object Function]";
  
  return false;
}

function isObject<T = any>(obj: any): obj is object & T {
  return obj !== null && typeof obj === "object" && !isArray(obj);
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


function isNil(nil: any): nil is null | undefined {
  return nil == null;
}

export {
  isNil,
  isFunction,
  isObject
};
