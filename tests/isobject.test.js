import { isObject } from "../dist/ch";

test("sends null to isObject", () => {
  expect(isObject(null)).toBe(false);
});

test("sends null to isObject check empty true", () => {
  expect(isObject(null, true)).toBe(false);
});

test("sends undefined to isObject", () => {
  expect(isObject(undefined)).toBe(false);
});

test("sends undefined to isObject check empty true", () => {
  expect(isObject(undefined, true)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isObject", () => {
  expect(isObject(s1)).toBe(false);
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

test("sends string to isObject check empty true", () => {
  expect(isObject("string", true)).toBe(false);
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

test("sends positive float to isObject check empty true", () => {
  expect(isObject(1.1, true)).toBe(false);
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

test("sends empty object to isObject", () => {
  expect(isObject({})).toBe(true);
});

test("sends empty object to isObject check empty true", () => {
  expect(isObject({}, true)).toBe(false);
});

const object = { a: 1, b: 2, c: 3};

test("sends object to isObject", () => {
  expect(isObject(object)).toBe(true);
});

test("sends object to isObject check empty true", () => {
  expect(isObject(object, true)).toBe(true);
});

test("sends empty array to isObject", () => {
  expect(isObject([])).toBe(false);
});

test("sends empty array to isObject check empty true", () => {
  expect(isObject([], true)).toBe(false);
});

test("sends array of 1 integer to isObject", () => {
  expect(isObject([2])).toBe(false);
});

test("sends array of 1 integer to isObject check empty true", () => {
  expect(isObject([2], true)).toBe(false);
});

test("sends array of 2 integers to isObject", () => {
  expect(isObject([2,1])).toBe(false);
});

test("sends array of 1 integer to isObject", () => {
  expect(isObject([2.1])).toBe(false);
});

test("sends array of 2 integers to isObject", () => {
  expect(isObject([2.1,1.1])).toBe(false);
});

test("sends array to isObject", () => {
  expect(isObject(["white", "grey", "black"])).toBe(false);
});

const json = `{
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

const invalidjson = `{
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

const para = document.createElement("p");

test("sends htmlElement to isObject", () => {
  expect(isObject(para)).toBe(true);
});

test("sends htmlElement to isObject check empty true", () => {
  expect(isObject(para, true)).toBe(false);
});

const node = document.createTextNode("new node");

test("sends node to isObject", () => {
  expect(isObject(node)).toBe(true);
});

test("sends node to isObject check empty true", () => {
  expect(isObject(node, true)).toBe(false);
});

test("sends regex to isObject", () => {
  expect(isObject(/ab+c/i)).toBe(true);
});

test("sends regex to isObject check empty true", () => {
  expect(isObject(/ab+c/i, true)).toBe(false);
});
