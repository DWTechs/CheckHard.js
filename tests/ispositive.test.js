import { isPositive } from "../dist/ch";

test("sends null to isPositive", () => {
  expect(isPositive(null)).toBe(false);
});

test("sends undefined to isPositive", () => {
  expect(isPositive(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isPositive", () => {
  expect(isPositive(s1)).toBe(false);
});

test("sends true to isPositive", () => {
  expect(isPositive(true)).toBe(false);
});

test("sends false to isPositive", () => {
  expect(isPositive(false)).toBe(false);
});

test("sends string to isPositive", () => {
  expect(isPositive("string")).toBe(false);
});

test("sends positive even integer to isPositive", () => {
  expect(isPositive(2)).toBe(true);
});

test("sends positive odd integer to isPositive", () => {
  expect(isPositive(1)).toBe(true);
});

test("sends zero to isPositive", () => {
  expect(isPositive(0)).toBe(false);
});

test("sends positive float to isPositive", () => {
  expect(isPositive(1.1)).toBe(true);
});

test("sends negative odd integer to isPositive", () => {
  expect(isPositive(-1)).toBe(false);
});

test("sends negative even integer to isPositive", () => {
  expect(isPositive(-2)).toBe(false);
});

test("sends negative float to isPositive", () => {
  expect(isPositive(-1.1)).toBe(false);
});

test("sends object to isPositive", () => {
  expect(isPositive({})).toBe(false);
});

test("sends empty array to isPositive", () => {
  expect(isPositive([])).toBe(false);
});

test("sends array of 1 integer to isPositive", () => {
  expect(isPositive([2])).toBe(false);
});

test("sends array of 2 integers to isPositive", () => {
  expect(isPositive([2,1])).toBe(false);
});

test("sends array of 1 integer to isPositive", () => {
  expect(isPositive([2.1])).toBe(false);
});

test("sends array of 2 integers to isPositive", () => {
  expect(isPositive([2.1,1.1])).toBe(false);
});

test("sends array to isPositive", () => {
  expect(isPositive(["white", "grey", "black"])).toBe(false);
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

test("sends json to isPositive", () => {
  expect(isPositive(json)).toBe(false);
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

test("sends invalid json to isPositive", () => {
  expect(isPositive(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isPositive", () => {
  expect(isPositive(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isPositive", () => {
  expect(isPositive(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isPositive", () => {
  expect(isPositive(node)).toBe(false);
});

test("sends regex to isPositive", () => {
  expect(isPositive(/ab+c/i)).toBe(false);
});
