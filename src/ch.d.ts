
export declare type Comparator = '='|'<'|'>'|'<='|'>=';

declare function isBoolean(bool: any): bool is boolean;
declare function isNil(nil: any): nil is null | undefined;
declare function isSymbol(sym: any): sym is Symbol;
declare function isJson(str: any): str is JSON;
declare function isFunction(func: any): func is Function;
declare function isObject<T = any>(obj: any, emptyCheck?: boolean): obj is object & T;
declare function isArray<T = any>(ar: any, comparator?: Comparator|null, length?: number|null): ar is Array<T>;
declare function isAscii(code: any, extended?: boolean): code is number;
declare function isInteger(num: any, typeCheck?: boolean): num is number;
declare function isValidInteger( num: any, min?: number, max?: number, typeCheck?: boolean): num is number;
declare function isFloat(num: any, typeCheck?: boolean): num is number;
declare function isValidFloat( num: any, min?: number, max?: number, typeCheck?: boolean): num is number;
declare function isNumber(num: any, typeCheck?: boolean): num is number;
declare function isValidNumber( num: any, min?: number, max?: number, typeCheck?: boolean): num is number;
declare function isString(str: any, emptyCheck?: boolean): str is string;
declare function isStringOfLength(str: any, min?: number, max?: number,): str is string;
declare function isHtmlElement(htmlElement: any): htmlElement is HTMLElement;
declare function isHtmlEventAttribute(htmlEventAttribute: any): htmlEventAttribute is string;
declare function isNode(node: any): node is Node;
declare function isRegex(regex: any, typeCheck?: boolean): regex is RegExp;
declare function isEven(num: any, typeCheck?: boolean): num is number;
declare function isOdd(num: any, typeCheck?: boolean): num is number;
declare function isOrigin(num: any, typeCheck?: boolean): num is number;
declare function isPositive(num: any, typeCheck?: boolean): num is number;
declare function isNegative(num: any, typeCheck?: boolean): num is number;
declare function isPowerOfTwo(num: any, typeCheck?: boolean): num is number;
declare function isEmail(email: any): email is string;
declare function isIpAddress(ipAddress: any): ipAddress is string;
declare function isJWT(t: any): t is string;
declare function isSlug(slug: any): slug is string;
declare function isHexadecimal(str: any): str is string;
declare function containsUpperCase(str: any): str is string;
declare function containsLowerCase(str: any): str is string;
declare function containsSpecialCharacter(str: any): str is string;
declare function containsNumber(str: any, min?: number, max?: number): str is string;
declare function isDate(date: any): date is Date;
declare function isValidDate(date: any, min?: Date, max?: Date): date is Date;
declare function isTimestamp(ts:any, typeCheck?: boolean): ts is number;
declare function isValidTimestamp(ts: any, min?: number, max?: number, typeCheck?: boolean): ts is number;


export { isBoolean, 
         isNil,
         isSymbol,
         isJson,
         isFunction,
         isObject,
         isArray,
         isAscii,
         isInteger,
         isValidInteger,
         isFloat,
         isValidFloat,
         isNumber,
         isValidNumber,
         isString,
         isStringOfLength,
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
         isJWT,
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