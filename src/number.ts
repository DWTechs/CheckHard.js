function isAscii(code: any, extended: boolean = true): boolean {
  if (isInteger(code, false)) {
    return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
  }
  return false;
}

function isInteger(number: any, typeCheck: boolean = true): boolean {
  const int = parseInt(<string>number, 10);
  return typeCheck ? number === int : number == int;
}

function isFloat(number: any, typeCheck: boolean = true): boolean {
  const moduloCheck = number % 1 !== 0;
  return typeCheck ? (Number(number) === number && moduloCheck) : (Number(number) == number && moduloCheck);
}

// // No type checking. Works with '8e4', '+true', '0x44' etc
function isNumeric(number: any): boolean {
  return !isNaN(number - parseFloat(number));
}

function isNumber(number: any, typeCheck: boolean = true): boolean {
  return typeCheck ? Number(number) === number : isNumeric(number);
}

function isEven(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && !(number & 1);
}

function isOdd(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && number & 1 ? true : false;
}

function isOrigin(number: any, typeCheck: boolean = true): boolean {
  return typeCheck ? (number === 0 ? true : false) : (number == 0 ? true : false);
}

function isPositive(number: any, typeCheck: boolean = true): boolean {
  return isNumber(number, typeCheck) && number > 0 ? true : false;
}

function isNegative(number: any, typeCheck: boolean = true): boolean {
  return isNumber(number, typeCheck) && number < 0 ? true : false;
}

function isPowerOfTwo(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && !isOrigin(number, typeCheck) && (number & (number - 1)) === 0;
}

export {
  isAscii,
  isInteger,
  isFloat,
  isNumber,
  isEven,
  isOdd,
  isOrigin,
  isPositive,
  isNegative,
  isPowerOfTwo
};
