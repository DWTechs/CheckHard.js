
/**
 * Checks if the given value is numeric.
 *
 * This function uses the NaN check hack to identify whether a value is numeric.
 * It works by first converting the value to a number using `parseFloat`, then
 * subtracting the result from the original value. If the result is `NaN` then
 * the original value is not numeric.
 * No type checking. Works with '8e4', '+true', '0x44' etc
 *
 * @param n The value to check.
 * @returns true if the value is numeric, false otherwise.
 */
function isNumeric(n: any): n is number {
  return !isNaN(n - parseFloat(n));
}

/**
 * Gets the internal [[Prototype]] property of the given value.
 *
 * The result is a string of the form "[object <type>]" where <type> is the
 * internal type of the value. This is similar to the `Object.prototype.toString`
 * method, but this function is not generic and will only work on objects.
 *
 * @param t The value to get the internal [[Prototype]] property of.
 * @returns A string of the form "[object <type>]".
 */
function getTag(t: any): string {
  return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

export {
  isNumeric,
  getTag
};