function isBoolean(bool: any): boolean {
  return typeof bool === "boolean";
}

function isFunction(func: any): boolean {
  if (func) {
    const getType = {};
    return func && getType.toString.call(func) === "[object Function]";
  }
  return false;
}

function isObject(object: any): boolean {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isArray(array: any): boolean {
  return array !== null && array.constructor === Array;
}

export {
  isBoolean,
  isFunction,
  isObject,
  isArray
};
