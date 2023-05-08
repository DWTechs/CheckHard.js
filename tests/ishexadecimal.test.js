import { isHexadecimal } from "../dist/ch";

test("sends hexadecimal in string format to isHexadecimal", () => {
  expect(isHexadecimal('#FF5733')).toBe(true);
});

test("sends date in string format to isHexadecimal", () => {
  expect(isHexadecimal('1/1/1900')).toBe(false);
});

const date = new Date('1/1/1900');
test("sends date object to isHexadecimal", () => {
  expect(isHexadecimal(date)).toBe(false);
});

test("sends null to isHexadecimal", () => {
  expect(isHexadecimal(null)).toBe(false);
});

test("sends undefined to isHexadecimal", () => {
  expect(isHexadecimal(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isHexadecimal", () => {
  expect(isHexadecimal(s1)).toBe(false);
});

test("sends true to isHexadecimal", () => {
  expect(isHexadecimal(true)).toBe(false);
});

test("sends false to isHexadecimal", () => {
  expect(isHexadecimal(false)).toBe(false);
});

test("sends string to isHexadecimal", () => {
  expect(isHexadecimal("string")).toBe(false);
});

test("sends positive even integer to isHexadecimal", () => {
  expect(isHexadecimal(2)).toBe(false);
});

test("sends positive odd integer to isHexadecimal", () => {
  expect(isHexadecimal(1)).toBe(false);
});

test("sends zero to isHexadecimal", () => {
  expect(isHexadecimal(0)).toBe(false);
});

test("sends positive float to isHexadecimal", () => {
  expect(isHexadecimal(1.1)).toBe(false);
});

test("sends negative odd integer to isHexadecimal", () => {
  expect(isHexadecimal(-1)).toBe(false);
});

test("sends negative even integer to isHexadecimal", () => {
  expect(isHexadecimal(-2)).toBe(false);
});

test("sends negative float to isHexadecimal", () => {
  expect(isHexadecimal(-1.1)).toBe(false);
});

test("sends object to isHexadecimal", () => {
  expect(isHexadecimal({})).toBe(false);
});

test("sends empty array to isHexadecimal", () => {
  expect(isHexadecimal([])).toBe(false);
});

test("sends array of 1 integer to isHexadecimal", () => {
  expect(isHexadecimal([2])).toBe(false);
});

test("sends array of 2 integers to isHexadecimal", () => {
  expect(isHexadecimal([2,1])).toBe(false);
});

test("sends array of 1 integer to isHexadecimal", () => {
  expect(isHexadecimal([2.1])).toBe(false);
});

test("sends array of 2 integers to isHexadecimal", () => {
  expect(isHexadecimal([2.1,1.1])).toBe(false);
});

test("sends array to isHexadecimal", () => {
  expect(isHexadecimal(["white", "grey", "black"])).toBe(false);
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

test("sends json to isHexadecimal", () => {
  expect(isHexadecimal(json)).toBe(false);
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

test("sends invalid json to isHexadecimal", () => {
  expect(isHexadecimal(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isHexadecimal", () => {
  expect(isHexadecimal(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isHexadecimal", () => {
  expect(isHexadecimal(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isHexadecimal", () => {
  expect(isHexadecimal(node)).toBe(false);
});

test("sends regex to isHexadecimal", () => {
  expect(isHexadecimal(/ab+c/i)).toBe(false);
});
