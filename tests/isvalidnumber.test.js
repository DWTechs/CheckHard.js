import { isValidNumber } from "../dist/ch";

test("sends string containing number to isValidNumber", () => {
  expect(isValidNumber('reft2rfd')).toBe(false);
});

test("sends null to isValidNumber", () => {
  expect(isValidNumber(null)).toBe(false);
});

test("sends undefined to isValidNumber", () => {
  expect(isValidNumber(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isValidNumber", () => {
  expect(isValidNumber(s1)).toBe(false);
});

test("sends true to isValidNumber", () => {
  expect(isValidNumber(true)).toBe(false);
});

test("sends 1+true to isValidNumber", () => {
  expect(isValidNumber(1+true)).toBe(true);
});

test("sends +true to isValidNumber", () => {
  expect(isValidNumber(+true)).toBe(true);
});

test("sends '+true' to isValidNumber", () => {
  expect(isValidNumber('+true')).toBe(false);
});

test("sends '+true' without type checking to isValidNumber", () => {
  expect(isValidNumber('+true', false)).toBe(false);
});

test("sends false to isValidNumber", () => {
  expect(isValidNumber(false)).toBe(false);
});

test("sends string to isValidNumber", () => {
  expect(isValidNumber("string")).toBe(false);
});

test("sends positive even integer to isValidNumber", () => {
  expect(isValidNumber(2)).toBe(true);
});

test("sends positive odd integer to isValidNumber", () => {
  expect(isValidNumber(1)).toBe(true);
});

test("sends positive big integer to isValidNumber", () => {
  expect(isValidNumber(9999999991)).toBe(false);
});

test("sends zero to isValidNumber", () => {
  expect(isValidNumber(0)).toBe(true);
});

test("sends positive float to isValidNumber", () => {
  expect(isValidNumber(1.1)).toBe(true);
});

test("sends positive big float to isValidNumber", () => {
  expect(isValidNumber(999999999.1)).toBe(false);
});

test("sends negative odd integer to isValidNumber", () => {
  expect(isValidNumber(-1)).toBe(true);
});

test("sends negative big integer to isValidNumber", () => {
  expect(isValidNumber(-9999999991)).toBe(false);
});

test("sends negative even integer to isValidNumber", () => {
  expect(isValidNumber(-2)).toBe(true);
});

test("sends negative float to isValidNumber", () => {
  expect(isValidNumber(-1.1)).toBe(true);
});

test("sends negative big float to isValidNumber", () => {
  expect(isValidNumber(-999999999.1)).toBe(false);
});

test("sends positive even integer in string format to isValidNumber", () => {
  expect(isValidNumber('2')).toBe(false);
});

test("sends positive odd integer in string format to isValidNumber", () => {
  expect(isValidNumber('1')).toBe(false);
});

test("sends positive big integer in string format to isValidNumber", () => {
  expect(isValidNumber('9999999991')).toBe(false);
});

test("sends zero in string format to isValidNumber", () => {
  expect(isValidNumber('0')).toBe(false);
});

test("sends positive float in string format to isValidNumber", () => {
  expect(isValidNumber('1.1')).toBe(false);
});

test("sends positive big float in string format to isValidNumber", () => {
  expect(isValidNumber('999999999.1')).toBe(false);
});

test("sends negative odd integer in string format to isValidNumber", () => {
  expect(isValidNumber('-1')).toBe(false);
});

test("sends negative big integer in string format to isValidNumber", () => {
  expect(isValidNumber('-9999999991')).toBe(false);
});

test("sends negative even integer in string format to isValidNumber", () => {
  expect(isValidNumber('-2')).toBe(false);
});

test("sends negative float in string format to isValidNumber", () => {
  expect(isValidNumber('-1.1')).toBe(false);
});

test("sends negative big float in string format to isValidNumber", () => {
  expect(isValidNumber('-999999999.1')).toBe(false);
});

test("sends '8e5' to isValidNumber", () => {
  expect(isValidNumber('8e5')).toBe(false);
});

test("sends '0x44' to isValidNumber", () => {
  expect(isValidNumber('0x44')).toBe(false);
});

test("sends '8e5' without type checking to isValidNumber", () => {
  expect(isValidNumber('8e5', false)).toBe(false);
});

test("sends '0x44' without type checking to isValidNumber", () => {
  expect(isValidNumber('0x44', false)).toBe(false);
});

test("sends 8e5 to isValidNumber", () => {
  expect(isValidNumber(8e5)).toBe(true);
});

test("sends 0x44 to isValidNumber", () => {
  expect(isValidNumber(0x44)).toBe(true);
});

test("sends object to isValidNumber", () => {
  expect(isValidNumber({})).toBe(false);
});

test("sends empty array to isValidNumber", () => {
  expect(isValidNumber([])).toBe(false);
});

test("sends array of 1 integer to isValidNumber", () => {
  expect(isValidNumber([2])).toBe(false);
});

test("sends array of 2 integers to isValidNumber", () => {
  expect(isValidNumber([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidNumber", () => {
  expect(isValidNumber([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidNumber", () => {
  expect(isValidNumber([2.1,1.1])).toBe(false);
});

test("sends array to isValidNumber", () => {
  expect(isValidNumber(["white", "grey", "black"])).toBe(false);
});

var json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to isValidNumber", () => {
  expect(isValidNumber(json)).toBe(false);
});

var invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to isValidNumber", () => {
  expect(isValidNumber(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isValidNumber", () => {
  expect(isValidNumber(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isValidNumber", () => {
  expect(isValidNumber(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isValidNumber", () => {
  expect(isValidNumber(node)).toBe(false);
});

test("sends regex to isValidNumber", () => {
  expect(isValidNumber(/ab+c/i)).toBe(false);
});
