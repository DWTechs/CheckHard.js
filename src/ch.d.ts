declare function isBoolean(bool: any): boolean;
declare function isNil(nil: any): boolean;
declare function isSymbol(sym: any): boolean;
declare function isJson(str: any): boolean;
declare function isFunction(func: any): boolean;
declare function isObject(object: any): boolean;
declare function isArray(array: any, length?: number): boolean;
declare function isAscii(code: any, extended?: boolean): boolean;
declare function isInteger(number: any, typeCheck?: boolean): boolean;
declare function isFloat(number: any, typeCheck?: boolean): boolean;
declare function isNumber(number: any, typeCheck?: boolean): boolean;
declare function isValidNumber( number: any, min?: number, max?: number, typeCheck?: boolean): boolean
declare function isString(string: any): boolean;
declare function isHtmlElement(htmlElement: any): boolean;
declare function isHtmlEventAttribute(htmlEventAttribute: any): boolean;
declare function isNode(node: any): boolean;
declare function isRegex(regex: any, typeCheck?: boolean): boolean;
declare function isEven(number: any, typeCheck?: boolean): boolean;
declare function isOdd(number: any, typeCheck?: boolean): boolean;
declare function isOrigin(number: any, typeCheck?: boolean): boolean;
declare function isPositive(number: any, typeCheck?: boolean): boolean;
declare function isNegative(number: any, typeCheck?: boolean): boolean;
declare function isPowerOfTwo(number: any, typeCheck?: boolean): boolean;
declare function isEmail(email: any): boolean;
declare function isIpAddress(ipAddress: any): boolean;
declare function isSlug(slug: any): boolean;
declare function isHexadecimal(string: any): boolean;
declare function containsUpperCase(string: any): boolean;
declare function containsLowerCase(string: any): boolean;
declare function containsSpecialCharacter(string: any): boolean;
declare function containsNumber(number: any): boolean;
declare function isDate(date: any): boolean;
declare function isValidDate(date: any, min?: Date, max?: Date): boolean;
declare function isTimestamp(timestamp:any): boolean;
declare function isValidTimestamp(timestamp: any, min?: number, max?: number): boolean;


export { isBoolean, 
         isNil,
         isSymbol,
         isJson,
         isFunction,
         isObject,
         isArray,
         isAscii,
         isInteger,
         isFloat,
         isNumber,
         isValidNumber,
         isString,
         isHtmlElement,
         isHtmlEventAttribute,
         isNode,
         isEven,
         isOdd,
         isOrigin,
         isPositive,
         isNegative,
         isPowerOfTwo,
         isRegex,
         isEmail,
         isIpAddress,
         isSlug,
         isHexadecimal,
         containsUpperCase,
         containsLowerCase,
         containsSpecialCharacter,
         containsNumber,
         isDate,
         isValidDate,
         isTimestamp,
         isValidTimestamp };