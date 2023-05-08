import { isNegative } from "../dist/ch";

test("sends null to isNegative", () => {
  expect(isNegative(null)).toBe(false);
});

test("sends undefined to isNegative", () => {
  expect(isNegative(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isNegative", () => {
  expect(isNegative(s1)).toBe(false);
});

test("sends true to isNegative", () => {
  expect(isNegative(true)).toBe(false);
});

test("sends false to isNegative", () => {
  expect(isNegative(false)).toBe(false);
});

test("sends string to isNegative", () => {
  expect(isNegative("string")).toBe(false);
});

test("sends positive even integer to isNegative", () => {
  expect(isNegative(2)).toBe(false);
});

test("sends positive odd integer to isNegative", () => {
  expect(isNegative(1)).toBe(false);
});

test("sends zero to isNegative", () => {
  expect(isNegative(0)).toBe(false);
});

test("sends positive float to isNegative", () => {
  expect(isNegative(1.1)).toBe(false);
});

test("sends negative odd integer to isNegative", () => {
  expect(isNegative(-1)).toBe(true);
});

test("sends negative even integer to isNegative", () => {
  expect(isNegative(-2)).toBe(true);
});

test("sends negative float to isNegative", () => {
  expect(isNegative(-1.1)).toBe(true);
});

test("sends object to isNegative", () => {
  expect(isNegative({})).toBe(false);
});

test("sends empty array to isNegative", () => {
  expect(isNegative([])).toBe(false);
});

test("sends array of 1 integer to isNegative", () => {
  expect(isNegative([2])).toBe(false);
});

test("sends array of 2 integers to isNegative", () => {
  expect(isNegative([2,1])).toBe(false);
});

test("sends array of 1 integer to isNegative", () => {
  expect(isNegative([2.1])).toBe(false);
});

test("sends array of 2 integers to isNegative", () => {
  expect(isNegative([2.1,1.1])).toBe(false);
});

test("sends array to isNegative", () => {
  expect(isNegative(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNegative", () => {
  expect(isNegative(json)).toBe(false);
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

test("sends invalid json to isNegative", () => {
  expect(isNegative(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNegative", () => {
  expect(isNegative(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNegative", () => {
  expect(isNegative(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isNegative", () => {
  expect(isNegative(node)).toBe(false);
});

test("sends regex to isNegative", () => {
  expect(isNegative(/ab+c/i)).toBe(false);
});
