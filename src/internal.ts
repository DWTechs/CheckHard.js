// No type checking. Works with '8e4', '+true', '0x44' etc
function isNumeric(n: any): n is Number {
  return !isNaN(n - parseFloat(n));
}

function getTag(t: any): string {
  return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

export {
  isNumeric,
  getTag
};