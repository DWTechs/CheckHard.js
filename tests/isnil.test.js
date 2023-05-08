import { isNil } from "../dist/ch";

test("sends null to isNil", () => {
  expect(isNil(null)).toBe(true);
});

test("sends undefined to isNil", () => {
  expect(isNil(undefined)).toBe(true);
});

const s1 = Symbol();
test("sends symbol to isNil", () => {
  expect(isNil(s1)).toBe(false);
});

test("sends true to isNil", () => {
  expect(isNil(true)).toBe(false);
});

test("sends false to isNil", () => {
  expect(isNil(false)).toBe(false);
});

test("sends string to isNil", () => {
  expect(isNil("string")).toBe(false);
});

test("sends positive even integer to isNil", () => {
  expect(isNil(2)).toBe(false);
});

test("sends positive odd integer to isNil", () => {
  expect(isNil(1)).toBe(false);
});

test("sends zero to isNil", () => {
  expect(isNil(0)).toBe(false);
});

test("sends positive float to isNil", () => {
  expect(isNil(1.1)).toBe(false);
});

test("sends negative odd integer to isNil", () => {
  expect(isNil(-1)).toBe(false);
});

test("sends negative even integer to isNil", () => {
  expect(isNil(-2)).toBe(false);
});

test("sends negative float to isNil", () => {
  expect(isNil(-1.1)).toBe(false);
});

test("sends object to isNil", () => {
  expect(isNil({})).toBe(false);
});

test("sends empty array to isNil", () => {
  expect(isNil([])).toBe(false);
});

test("sends array of 1 integer to isNil", () => {
  expect(isNil([2])).toBe(false);
});

test("sends array of 2 integers to isNil", () => {
  expect(isNil([2,1])).toBe(false);
});

test("sends array of 1 integer to isNil", () => {
  expect(isNil([2.1])).toBe(false);
});

test("sends array of 2 integers to isNil", () => {
  expect(isNil([2.1,1.1])).toBe(false);
});

test("sends array to isNil", () => {
  expect(isNil(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNil", () => {
  expect(isNil(json)).toBe(false);
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

test("sends invalid json to isNil", () => {
  expect(isNil(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNil", () => {
  expect(isNil(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNil", () => {
  expect(isNil(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isNil", () => {
  expect(isNil(node)).toBe(false);
});

test("sends regex to isNil", () => {
  expect(isNil(/ab+c/i)).toBe(false);
});
