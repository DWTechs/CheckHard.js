
function isArray(array: any, length?: number|null): boolean {
  return array?.constructor === Array && (length ? array.length === length : true);
}

export {
  isArray
};
