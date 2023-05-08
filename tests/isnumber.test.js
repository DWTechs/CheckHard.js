import { isNumber } from "../dist/ch";

test("sends null to isNumber", () => {
  expect(isNumber(null)).toBe(false);
});

test("sends undefined to isNumber", () => {
  expect(isNumber(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isNumber", () => {
  expect(isNumber(s1)).toBe(false);
});

test("sends true to isNumber", () => {
  expect(isNumber(true)).toBe(false);
});

test("sends 1+true to isNumber", () => {
  expect(isNumber(1+true)).toBe(true);
});

test("sends +true to isNumber", () => {
  expect(isNumber(+true)).toBe(true);
});

test("sends '+true' to isNumber", () => {
  expect(isNumber('+true')).toBe(false);
});

test("sends '+true' without type checking to isNumber", () => {
  expect(isNumber('+true', false)).toBe(false);
});

test("sends false to isNumber", () => {
  expect(isNumber(false)).toBe(false);
});

test("sends string to isNumber", () => {
  expect(isNumber("string")).toBe(false);
});

test("sends positive even integer to isNumber", () => {
  expect(isNumber(2)).toBe(true);
});

test("sends positive odd integer to isNumber", () => {
  expect(isNumber(1)).toBe(true);
});

test("sends zero to isNumber", () => {
  expect(isNumber(0)).toBe(true);
});

test("sends positive float to isNumber", () => {
  expect(isNumber(1.1)).toBe(true);
});

test("sends negative odd integer to isNumber", () => {
  expect(isNumber(-1)).toBe(true);
});

test("sends negative even integer to isNumber", () => {
  expect(isNumber(-2)).toBe(true);
});

test("sends negative float to isNumber", () => {
  expect(isNumber(-1.1)).toBe(true);
});

test("sends empty array to isNumber", () => {
  expect(isNumber([])).toBe(false);
});

test("sends array of 1 integer to isNumber", () => {
  expect(isNumber([2])).toBe(false);
});

test("sends array of 2 integers to isNumber", () => {
  expect(isNumber([2,1])).toBe(false);
});

test("sends positive even integer in string format to isNumber", () => {
  expect(isNumber('2')).toBe(false);
});

test("sends positive odd integer in string format to isNumber", () => {
  expect(isNumber('1')).toBe(false);
});

test("sends zero in string format to isNumber", () => {
  expect(isNumber('0')).toBe(false);
});

test("sends positive float in string format to isNumber", () => {
  expect(isNumber('1.1')).toBe(false);
});

test("sends negative odd integer in string format to isNumber", () => {
  expect(isNumber('-1')).toBe(false);
});

test("sends negative even integer in string format to isNumber", () => {
  expect(isNumber('-2')).toBe(false);
});

test("sends negative float in string format to isNumber", () => {
  expect(isNumber('-1.1')).toBe(false);
});

test("sends positive even integer in string format without type checking to isNumber", () => {
  expect(isNumber('2', false)).toBe(true);
});

test("sends positive odd integer in string format without type checking to isNumber", () => {
  expect(isNumber('1', false)).toBe(true);
});

test("sends zero in string format without type checking to isNumber", () => {
  expect(isNumber('0', false)).toBe(true);
});

test("sends positive float in string format without type checking to isNumber", () => {
  expect(isNumber('1.1', false)).toBe(true);
});

test("sends negative odd integer in string format without type checking to isNumber", () => {
  expect(isNumber('-1', false)).toBe(true);
});

test("sends negative even integer in string format without type checking to isNumber", () => {
  expect(isNumber('-2', false)).toBe(true);
});

test("sends negative float in string format without type checking to isNumber", () => {
  expect(isNumber('-1.1', false)).toBe(true);
});

test("sends '8e5' to isNumber", () => {
  expect(isNumber('8e5')).toBe(false);
});

test("sends '0x44' to isNumber", () => {
  expect(isNumber('0x44')).toBe(false);
});

test("sends '8e5' without type checking to isNumber", () => {
  expect(isNumber('8e5', false)).toBe(true);
});

test("sends '0x44' without type checking to isNumber", () => {
  expect(isNumber('0x44', false)).toBe(true);
});

test("sends empty array without type checking to isNumber", () => {
  expect(isNumber([], false)).toBe(false);
});

test("sends array of 1 integer without type checking to isNumber", () => {
  expect(isNumber([2], false)).toBe(false);
});

test("sends array of 2 integers without type checking to isNumber", () => {
  expect(isNumber([2,1], false)).toBe(false);
});

test("sends array of 1 integer to isNumber", () => {
  expect(isNumber([2.1])).toBe(false);
});

test("sends array of 2 integers to isNumber", () => {
  expect(isNumber([2.1,1.1])).toBe(false);
});

test("sends 8e5 to isNumber", () => {
  expect(isNumber(8e5)).toBe(true);
});

test("sends 0x44 to isNumber", () => {
  expect(isNumber(0x44)).toBe(true);
});


test("sends object to isNumber", () => {
  expect(isNumber({})).toBe(false);
});

test("sends array to isNumber", () => {
  expect(isNumber(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNumber", () => {
  expect(isNumber(json)).toBe(false);
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

test("sends invalid json to isNumber", () => {
  expect(isNumber(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNumber", () => {
  expect(isNumber(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNumber", () => {
  expect(isNumber(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isNumber", () => {
  expect(isNumber(node)).toBe(false);
});

test("sends regex to isNumber", () => {
  expect(isNumber(/ab+c/i)).toBe(false);
});
