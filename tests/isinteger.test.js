import { isInteger } from "../dist/ch";

test("sends null to isInteger", () => {
  expect(isInteger(null)).toBe(false);
});

test("sends undefined to isInteger", () => {
  expect(isInteger(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isInteger", () => {
  expect(isInteger(s1)).toBe(false);
});

test("sends true to isInteger", () => {
  expect(isInteger(true)).toBe(false);
});

test("sends false to isInteger", () => {
  expect(isInteger(false)).toBe(false);
});

test("sends string to isInteger", () => {
  expect(isInteger("string")).toBe(false);
});

test("sends figure as string to isInteger", () => {
  expect(isInteger("1")).toBe(false);
});

test("sends number as string to isInteger", () => {
  expect(isInteger("89")).toBe(false);
});

test("sends number in string to isInteger", () => {
  expect(isInteger("89rt")).toBe(false);
});

test("sends figure as string to isInteger without typeCheck", () => {
  expect(isInteger("1", false)).toBe(true);
});

test("sends number as string to isInteger without typeCheck", () => {
  expect(isInteger("89", false)).toBe(true);
});

test("sends number in string to isInteger without typeCheck", () => {
  expect(isInteger("89rt", false)).toBe(false);
});

test("sends float as string to isInteger", () => {
  expect(isInteger("1.5")).toBe(false);
});

test("sends number in string to isInteger", () => {
  expect(isInteger("8.9rt")).toBe(false);
});

test("sends float as string to isInteger without typeCheck", () => {
  expect(isInteger("1.5", false)).toBe(false);
});

test("sends float in string to isInteger without typeCheck", () => {
  expect(isInteger("8.9rt", false)).toBe(false);
});

test("sends valid timestamp as string to isinteger", () => {
  expect(isInteger("7258114800001")).toBe(false);
});

test("sends valid timestamp as string to isinteger, no type check", () => {
  expect(isInteger("7258114800001", false)).toBe(true);
});

test("sends positive even integer to isInteger", () => {
  expect(isInteger(2)).toBe(true);
});

test("sends positive odd integer to isInteger", () => {
  expect(isInteger(1)).toBe(true);
});

test("sends zero to isInteger", () => {
  expect(isInteger(0)).toBe(true);
});

test("sends positive float to isInteger", () => {
  expect(isInteger(1.1)).toBe(false);
});

test("sends negative odd integer to isInteger", () => {
  expect(isInteger(-1)).toBe(true);
});

test("sends negative even integer to isInteger", () => {
  expect(isInteger(-2)).toBe(true);
});

test("sends negative float to isInteger", () => {
  expect(isInteger(-1.1)).toBe(false);
});

test("sends object to isInteger", () => {
  expect(isInteger({})).toBe(false);
});

test("sends empty array to isInteger", () => {
  expect(isInteger([])).toBe(false);
});

test("sends array of 1 integer to isInteger", () => {
  expect(isInteger([2])).toBe(false);
});

test("sends array of 2 integers to isInteger", () => {
  expect(isInteger([2,1])).toBe(false);
});

test("sends array of 1 integer to isInteger", () => {
  expect(isInteger([2.1])).toBe(false);
});

test("sends array of 2 integers to isInteger", () => {
  expect(isInteger([2.1,1.1])).toBe(false);
});

test("sends array to isInteger", () => {
  expect(isInteger(["white", "grey", "black"])).toBe(false);
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

test("sends json to isInteger", () => {
  expect(isInteger(json)).toBe(false);
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

test("sends invalid json to isInteger", () => {
  expect(isInteger(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isInteger", () => {
  expect(isInteger(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isInteger", () => {
  expect(isInteger(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isInteger", () => {
  expect(isInteger(node)).toBe(false);
});

test("sends regex to isInteger", () => {
  expect(isInteger(/ab+c/i)).toBe(false);
});
