import { isString } from "../dist/ch";

test("sends null to isString", () => {
  expect(isString(null)).toBe(false);
});

test("sends true to isString", () => {
  expect(isString(true)).toBe(false);
});

test("sends false to isString", () => {
  expect(isString(false)).toBe(false);
});

test("sends string to isString", () => {
  expect(isString("string")).toBe(true);
});

test("sends positive even integer to isString", () => {
  expect(isString(2)).toBe(false);
});

test("sends positive odd integer to isString", () => {
  expect(isString(1)).toBe(false);
});

test("sends zero to isString", () => {
  expect(isString(0)).toBe(false);
});

test("sends positive float to isString", () => {
  expect(isString(1.1)).toBe(false);
});

test("sends negative odd integer to isString", () => {
  expect(isString(-1)).toBe(false);
});

test("sends negative even integer to isString", () => {
  expect(isString(-2)).toBe(false);
});

test("sends negative float to isString", () => {
  expect(isString(-1.1)).toBe(false);
});

test("sends object to isString", () => {
  expect(isString({})).toBe(false);
});

test("sends empty array to isString", () => {
  expect(isString([])).toBe(false);
});

test("sends array to isString", () => {
  expect(isString(["white", "grey", "black"])).toBe(false);
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

test("sends json to isString", () => {
  expect(isString(json)).toBe(true);
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

test("sends invalid json to isString", () => {
  expect(isString(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to isString", () => {
  expect(isString(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isString", () => {
  expect(isString(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isString", () => {
  expect(isString(node)).toBe(false);
});

test("sends regex to isString", () => {
  expect(isString(/ab+c/i)).toBe(false);
});
