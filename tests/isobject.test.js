import { isObject } from "../dist/ch";

test("sends null to isObject", () => {
  expect(isObject(null)).toBe(false);
});

test("sends true to isObject", () => {
  expect(isObject(true)).toBe(false);
});

test("sends false to isObject", () => {
  expect(isObject(false)).toBe(false);
});

test("sends string to isObject", () => {
  expect(isObject("string")).toBe(false);
});

test("sends positive even integer to isObject", () => {
  expect(isObject(2)).toBe(false);
});

test("sends positive odd integer to isObject", () => {
  expect(isObject(1)).toBe(false);
});

test("sends zero to isObject", () => {
  expect(isObject(0)).toBe(false);
});

test("sends positive float to isObject", () => {
  expect(isObject(1.1)).toBe(false);
});

test("sends negative odd integer to isObject", () => {
  expect(isObject(-1)).toBe(false);
});

test("sends negative even integer to isObject", () => {
  expect(isObject(-2)).toBe(false);
});

test("sends negative float to isObject", () => {
  expect(isObject(-1.1)).toBe(false);
});

test("sends object to isObject", () => {
  expect(isObject({})).toBe(true);
});

test("sends empty array to isObject", () => {
  expect(isObject([])).toBe(false);
});

test("sends array to isObject", () => {
  expect(isObject(["white", "grey", "black"])).toBe(false);
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

test("sends json to isObject", () => {
  expect(isObject(json)).toBe(false);
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

test("sends invalid json to isObject", () => {
  expect(isObject(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isObject", () => {
  expect(isObject(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isObject", () => {
  expect(isObject(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isObject", () => {
  expect(isObject(node)).toBe(true);
});

test("sends regex to isObject", () => {
  expect(isObject(/ab+c/i)).toBe(true);
});
