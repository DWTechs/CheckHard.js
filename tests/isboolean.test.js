import { isBoolean } from "../dist/ch";

test("sends null to isBoolean", () => {
  expect(isBoolean(null)).toBe(false);
});

test("sends undefined to isBoolean", () => {
  expect(isBoolean(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isBoolean", () => {
  expect(isBoolean(s1)).toBe(false);
});

test("sends true to isBoolean", () => {
  expect(isBoolean(true)).toBe(true);
});

test("sends false to isBoolean", () => {
  expect(isBoolean(false)).toBe(true);
});

test("sends string to isBoolean", () => {
  expect(isBoolean("string")).toBe(false);
});

test("sends positive even integer to isBoolean", () => {
  expect(isBoolean(2)).toBe(false);
});

test("sends positive odd integer to isBoolean", () => {
  expect(isBoolean(1)).toBe(false);
});

test("sends zero to isBoolean", () => {
  expect(isBoolean(0)).toBe(false);
});

test("sends positive float to isBoolean", () => {
  expect(isBoolean(1.1)).toBe(false);
});

test("sends negative odd integer to isBoolean", () => {
  expect(isBoolean(-1)).toBe(false);
});

test("sends negative even integer to isBoolean", () => {
  expect(isBoolean(-2)).toBe(false);
});

test("sends negative float to isBoolean", () => {
  expect(isBoolean(-1.1)).toBe(false);
});

test("sends object to isBoolean", () => {
  expect(isBoolean({})).toBe(false);
});

test("sends empty array to isBoolean", () => {
  expect(isBoolean([])).toBe(false);
});

test("sends array of 1 integer to isBoolean", () => {
  expect(isBoolean([2])).toBe(false);
});

test("sends array of 2 integers to isBoolean", () => {
  expect(isBoolean([2,1])).toBe(false);
});

test("sends array of 1 integer to isBoolean", () => {
  expect(isBoolean([2.1])).toBe(false);
});

test("sends array of 2 integers to isBoolean", () => {
  expect(isBoolean([2.1,1.1])).toBe(false);
});

test("sends array to isBoolean", () => {
  expect(isBoolean(["white", "grey", "black"])).toBe(false);
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

test("sends json to isBoolean", () => {
  expect(isBoolean(json)).toBe(false);
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

test("sends invalid json to isBoolean", () => {
  expect(isBoolean(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isBoolean", () => {
  expect(isBoolean(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isBoolean", () => {
  expect(isBoolean(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isBoolean", () => {
  expect(isBoolean(node)).toBe(false);
});

test("sends regex to isBoolean", () => {
  expect(isBoolean(/ab+c/i)).toBe(false);
});
