import { isStringOfLength } from "../dist/ch";

test("sends null to isStringOfLength", () => {
  expect(isStringOfLength(null)).toBe(false);
});

test("sends undefined to isStringOfLength", () => {
  expect(isStringOfLength(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isStringOfLength", () => {
  expect(isStringOfLength(s1)).toBe(false);
});

test("sends true to isStringOfLength", () => {
  expect(isStringOfLength(true)).toBe(false);
});

test("sends empty string to isStringOfLength", () => {
  expect(isStringOfLength("")).toBe(true);
});

test("sends empty string to isString with limit of 1 char", () => {
  expect(isStringOfLength("", 1)).toBe(false);
});

test("sends empty string to isString with limit of 1 char min, 5 char max", () => {
  expect(isStringOfLength("", 1, 5)).toBe(false);
});

test("sends false to isStringOfLength", () => {
  expect(isStringOfLength(false)).toBe(false);
});

test("sends string to isStringOfLength", () => {
  expect(isStringOfLength("string")).toBe(true);
});

test("sends string to isString with limit of 2 char min, 6 char max", () => {
  expect(isStringOfLength("string", 2, 6)).toBe(true);
});

test("sends string to isString with limit of 2 char min, 8 char max", () => {
  expect(isStringOfLength("string", 2, 8)).toBe(true);
});

test("sends string to isString with limit of 6 char min, 8 char max", () => {
  expect(isStringOfLength("string", 6, 8)).toBe(true);
});

test("sends string to isString with limit of 7 char min, 8 char max", () => {
  expect(isStringOfLength("string", 7, 8)).toBe(false);
});

test("sends string to isStringOfLength with inversed min and max", () => {
  expect(isStringOfLength("string", 8, 2)).toBe(false);
});

test("sends positive even integer to isStringOfLength", () => {
  expect(isStringOfLength(2)).toBe(false);
});

test("sends positive odd integer to isStringOfLength", () => {
  expect(isStringOfLength(1)).toBe(false);
});

test("sends zero to isStringOfLength", () => {
  expect(isStringOfLength(0)).toBe(false);
});

test("sends positive float to isStringOfLength", () => {
  expect(isStringOfLength(1.1)).toBe(false);
});

test("sends negative odd integer to isStringOfLength", () => {
  expect(isStringOfLength(-1)).toBe(false);
});

test("sends negative even integer to isStringOfLength", () => {
  expect(isStringOfLength(-2)).toBe(false);
});

test("sends negative float to isStringOfLength", () => {
  expect(isStringOfLength(-1.1)).toBe(false);
});

test("sends object to isStringOfLength", () => {
  expect(isStringOfLength({})).toBe(false);
});

test("sends empty array to isStringOfLength", () => {
  expect(isStringOfLength([])).toBe(false);
});

test("sends array of 1 integer to isStringOfLength", () => {
  expect(isStringOfLength([2])).toBe(false);
});

test("sends array of 2 integers to isStringOfLength", () => {
  expect(isStringOfLength([2,1])).toBe(false);
});

test("sends array of 1 integer to isStringOfLength", () => {
  expect(isStringOfLength([2.1])).toBe(false);
});

test("sends array of 2 integers to isStringOfLength", () => {
  expect(isStringOfLength([2.1,1.1])).toBe(false);
});

test("sends array to isStringOfLength", () => {
  expect(isStringOfLength(["white", "grey", "black"])).toBe(false);
});

test("sends array to isString with empty check", () => {
  expect(isStringOfLength(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to isStringOfLength", () => {
  expect(isStringOfLength(json)).toBe(true);
});

test("sends json to isString with empty check", () => {
  expect(isStringOfLength(json, true)).toBe(true);
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

test("sends invalid json to isStringOfLength", () => {
  expect(isStringOfLength(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to isStringOfLength", () => {
  expect(isStringOfLength(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isStringOfLength", () => {
  expect(isStringOfLength(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isStringOfLength", () => {
  expect(isStringOfLength(node)).toBe(false);
});

test("sends regex to isStringOfLength", () => {
  expect(isStringOfLength(/ab+c/i)).toBe(false);
});
