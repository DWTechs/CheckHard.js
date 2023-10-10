// No type checking. Works with '8e4', '+true', '0x44' etc
function isNumeric(num: any): num is Number {
  return !isNaN(num - parseFloat(num));
}

function getTag(tag: any): string {
  if (tag == null)
    return tag === undefined ? '[object Undefined]' : '[object Null]';

  return toString.call(tag);
}

export {
  isNumeric,
  getTag
};