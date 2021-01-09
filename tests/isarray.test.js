import { isArray } from "../dist/ch";

test("sends null to isArray", () => {
  expect(isArray(null)).toBe(false);
});

test("sends true to isArray", () => {
  expect(isArray(true)).toBe(false);
});

test("sends false to isArray", () => {
  expect(isArray(false)).toBe(false);
});

test("sends string to isArray", () => {
  expect(isArray("string")).toBe(false);
});

test("sends positive even integer to isArray", () => {
  expect(isArray(2)).toBe(false);
});

test("sends positive odd integer to isArray", () => {
  expect(isArray(1)).toBe(false);
});

test("sends zero to isArray", () => {
  expect(isArray(0)).toBe(false);
});

test("sends positive float to isArray", () => {
  expect(isArray(1.1)).toBe(false);
});

test("sends negative odd integer to isArray", () => {
  expect(isArray(-1)).toBe(false);
});

test("sends negative even integer to isArray", () => {
  expect(isArray(-2)).toBe(false);
});

test("sends negative float to isArray", () => {
  expect(isArray(-1.1)).toBe(false);
});

test("sends object to isArray", () => {
  expect(isArray({})).toBe(false);
});

test("sends empty array to isArray", () => {
  expect(isArray([])).toBe(true);
});

test("sends array to isArray", () => {
  expect(isArray(["white", "grey", "black"])).toBe(true);
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

test("sends json to isArray", () => {
  expect(isArray(json)).toBe(false);
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

test("sends invalid json to isArray", () => {
  expect(isArray(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isArray", () => {
  expect(isArray(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isArray", () => {
  expect(isArray(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isArray", () => {
  expect(isArray(node)).toBe(false);
});

test("sends regex to isArray", () => {
  expect(isArray(/ab+c/i)).toBe(false);
});
