import { isFunction } from "../dist/ch";

test("sends null to isFunction", () => {
  expect(isFunction(null)).toBe(false);
});

test("sends undefined to isFunction", () => {
  expect(isFunction(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isFunction", () => {
  expect(isFunction(s1)).toBe(false);
});

test("sends true to isFunction", () => {
  expect(isFunction(true)).toBe(false);
});

test("sends false to isFunction", () => {
  expect(isFunction(false)).toBe(false);
});

test("sends string to isFunction", () => {
  expect(isFunction("string")).toBe(false);
});

test("sends positive even integer to isFunction", () => {
  expect(isFunction(2)).toBe(false);
});

test("sends positive odd integer to isFunction", () => {
  expect(isFunction(1)).toBe(false);
});

test("sends zero to isFunction", () => {
  expect(isFunction(0)).toBe(false);
});

test("sends positive float to isFunction", () => {
  expect(isFunction(1.1)).toBe(false);
});

test("sends negative odd integer to isFunction", () => {
  expect(isFunction(-1)).toBe(false);
});

test("sends negative even integer to isFunction", () => {
  expect(isFunction(-2)).toBe(false);
});

test("sends negative float to isFunction", () => {
  expect(isFunction(-1.1)).toBe(false);
});

test("sends object to isFunction", () => {
  expect(isFunction({})).toBe(false);
});

test("sends empty array to isFunction", () => {
  expect(isFunction([])).toBe(false);
});

test("sends array of 1 integer to isFunction", () => {
  expect(isFunction([2])).toBe(false);
});

test("sends array of 2 integers to isFunction", () => {
  expect(isFunction([2,1])).toBe(false);
});

test("sends array of 1 integer to isFunction", () => {
  expect(isFunction([2.1])).toBe(false);
});

test("sends array of 2 integers to isFunction", () => {
  expect(isFunction([2.1,1.1])).toBe(false);
});

test("sends array to isFunction", () => {
  expect(isFunction(["white", "grey", "black"])).toBe(false);
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

test("sends json to isFunction", () => {
  expect(isFunction(json)).toBe(false);
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

test("sends invalid json to isFunction", () => {
  expect(isFunction(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isFunction", () => {
  expect(isFunction(testFunction)).toBe(true);
});

var para = document.createElement("p");

test("sends htmlElement to isFunction", () => {
  expect(isFunction(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isFunction", () => {
  expect(isFunction(node)).toBe(false);
});

test("sends regex to isFunction", () => {
  expect(isFunction(/ab+c/i)).toBe(false);
});
