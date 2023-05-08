import { isSymbol } from "../dist/ch";

test("sends null to isSymbol", () => {
  expect(isSymbol(null)).toBe(false);
});

test("sends undefined to isSymbol", () => {
  expect(isSymbol(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isSymbol", () => {
  expect(isSymbol(s1)).toBe(true);
});

test("sends true to isSymbol", () => {
  expect(isSymbol(true)).toBe(false);
});

test("sends false to isSymbol", () => {
  expect(isSymbol(false)).toBe(false);
});

test("sends string to isSymbol", () => {
  expect(isSymbol("string")).toBe(false);
});

test("sends positive even integer to isSymbol", () => {
  expect(isSymbol(2)).toBe(false);
});

test("sends positive odd integer to isSymbol", () => {
  expect(isSymbol(1)).toBe(false);
});

test("sends zero to isSymbol", () => {
  expect(isSymbol(0)).toBe(false);
});

test("sends positive float to isSymbol", () => {
  expect(isSymbol(1.1)).toBe(false);
});

test("sends negative odd integer to isSymbol", () => {
  expect(isSymbol(-1)).toBe(false);
});

test("sends negative even integer to isSymbol", () => {
  expect(isSymbol(-2)).toBe(false);
});

test("sends negative float to isSymbol", () => {
  expect(isSymbol(-1.1)).toBe(false);
});

test("sends object to isSymbol", () => {
  expect(isSymbol({})).toBe(false);
});

test("sends empty array to isSymbol", () => {
  expect(isSymbol([])).toBe(false);
});

test("sends array of 1 integer to isSymmbol", () => {
  expect(isSymbol([2])).toBe(false);
});

test("sends array of 2 integers to isSymmbol", () => {
  expect(isSymbol([2,1])).toBe(false);
});

test("sends array of 1 integer to isSymbol", () => {
  expect(isSymbol([2.1])).toBe(false);
});

test("sends array of 2 integers to isSymbol", () => {
  expect(isSymbol([2.1,1.1])).toBe(false);
});

test("sends array to isSymbol", () => {
  expect(isSymbol(["white", "grey", "black"])).toBe(false);
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

test("sends json to isSymbol", () => {
  expect(isSymbol(json)).toBe(false);
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

test("sends invalid json to isSymbol", () => {
  expect(isSymbol(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isSymbol", () => {
  expect(isSymbol(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isSymbol", () => {
  expect(isSymbol(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isSymbol", () => {
  expect(isSymbol(node)).toBe(false);
});

test("sends regex to isSymbol", () => {
  expect(isSymbol(/ab+c/i)).toBe(false);
});
