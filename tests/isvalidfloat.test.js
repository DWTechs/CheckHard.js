import { isValidFloat } from "../dist/ch";

test("sends string containing number to isValidFloat", () => {
  expect(isValidFloat('reft2rfd')).toBe(false);
});

test("sends null to isValidFloat", () => {
  expect(isValidFloat(null)).toBe(false);
});

test("sends undefined to isValidFloat", () => {
  expect(isValidFloat(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isValidFloat", () => {
  expect(isValidFloat(s1)).toBe(false);
});

test("sends true to isValidFloat", () => {
  expect(isValidFloat(true)).toBe(false);
});

test("sends 1+true to isValidFloat", () => {
  expect(isValidFloat(1+true)).toBe(false);
});

test("sends +true to isValidFloat", () => {
  expect(isValidFloat(+true)).toBe(false);
});

test("sends '+true' to isValidFloat", () => {
  expect(isValidFloat('+true')).toBe(false);
});

test("sends '+true' without type checking to isValidFloat", () => {
  expect(isValidFloat('+true', false)).toBe(false);
});

test("sends false to isValidFloat", () => {
  expect(isValidFloat(false)).toBe(false);
});

test("sends string to isValidFloat", () => {
  expect(isValidFloat("string")).toBe(false);
});

test("sends positive even integer to isValidFloat", () => {
  expect(isValidFloat(2)).toBe(false);
});

test("sends positive odd integer to isValidFloat", () => {
  expect(isValidFloat(1)).toBe(false);
});

test("sends positive big integer to isValidFloat", () => {
  expect(isValidFloat(9999999991)).toBe(false);
});

test("sends zero to isValidFloat", () => {
  expect(isValidFloat(0)).toBe(false);
});

test("sends positive float to isValidFloat", () => {
  expect(isValidFloat(1.1)).toBe(true);
});

test("sends positive big float to isValidFloat", () => {
  expect(isValidFloat(9999999990.1)).toBe(false);
});

test("sends positive big float to isValidFloat", () => {
  expect(isValidFloat(999999999.1)).toBe(true);
});

test("sends negative odd integer to isValidFloat", () => {
  expect(isValidFloat(-1)).toBe(false);
});

test("sends negative big integer to isValidFloat", () => {
  expect(isValidFloat(-9999999991)).toBe(false);
});

test("sends negative even integer to isValidFloat", () => {
  expect(isValidFloat(-2)).toBe(false);
});

test("sends negative float to isValidFloat", () => {
  expect(isValidFloat(-1.1)).toBe(true);
});

test("sends negative big float to isValidFloat", () => {
  expect(isValidFloat(-9999999990.1)).toBe(false);
});

test("sends negative big float to isValidFloat", () => {
  expect(isValidFloat(-999999999.1)).toBe(true);
});

test("sends positive even integer in string format to isValidFloat", () => {
  expect(isValidFloat('2')).toBe(false);
});

test("sends positive odd integer in string format to isValidFloat", () => {
  expect(isValidFloat('1')).toBe(false);
});

test("sends positive big integer in string format to isValidFloat", () => {
  expect(isValidFloat('9999999991')).toBe(false);
});

test("sends zero in string format to isValidFloat", () => {
  expect(isValidFloat('0')).toBe(false);
});

test("sends positive float in string format to isValidFloat", () => {
  expect(isValidFloat('1.1')).toBe(false);
});

test("sends positive big float in string format to isValidFloat", () => {
  expect(isValidFloat('999999999.1')).toBe(false);
});

test("sends negative odd integer in string format to isValidFloat", () => {
  expect(isValidFloat('-1')).toBe(false);
});

test("sends negative big integer in string format to isValidFloat", () => {
  expect(isValidFloat('-9999999991')).toBe(false);
});

test("sends negative even integer in string format to isValidFloat", () => {
  expect(isValidFloat('-2')).toBe(false);
});

test("sends negative float in string format to isValidFloat", () => {
  expect(isValidFloat('-1.1')).toBe(false);
});

test("sends negative big float in string format to isValidFloat", () => {
  expect(isValidFloat('-999999999.1')).toBe(false);
});

test("sends '8e5' to isValidFloat", () => {
  expect(isValidFloat('8e5')).toBe(false);
});

test("sends '0x44' to isValidFloat", () => {
  expect(isValidFloat('0x44')).toBe(false);
});

test("sends '8e5' without type checking to isValidFloat", () => {
  expect(isValidFloat('8e5', false)).toBe(false);
});

test("sends '0x44' without type checking to isValidFloat", () => {
  expect(isValidFloat('0x44', false)).toBe(false);
});

test("sends 8e5 to isValidFloat", () => {
  expect(isValidFloat(8e5)).toBe(false);
});

test("sends 0x44 to isValidFloat", () => {
  expect(isValidFloat(0x44)).toBe(false);
});

test("sends object to isValidFloat", () => {
  expect(isValidFloat({})).toBe(false);
});

test("sends empty array to isValidFloat", () => {
  expect(isValidFloat([])).toBe(false);
});

test("sends array of 1 integer to isValidFloat", () => {
  expect(isValidFloat([2])).toBe(false);
});

test("sends array of 2 integers to isValidFloat", () => {
  expect(isValidFloat([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidFloat", () => {
  expect(isValidFloat([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidFloat", () => {
  expect(isValidFloat([2.1,1.1])).toBe(false);
});

test("sends array to isValidFloat", () => {
  expect(isValidFloat(["white", "grey", "black"])).toBe(false);
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

test("sends json to isValidFloat", () => {
  expect(isValidFloat(json)).toBe(false);
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

test("sends invalid json to isValidFloat", () => {
  expect(isValidFloat(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isValidFloat", () => {
  expect(isValidFloat(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isValidFloat", () => {
  expect(isValidFloat(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isValidFloat", () => {
  expect(isValidFloat(node)).toBe(false);
});

test("sends regex to isValidFloat", () => {
  expect(isValidFloat(/ab+c/i)).toBe(false);
});
