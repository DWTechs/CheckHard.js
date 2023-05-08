import { isEven } from "../dist/ch";

test("sends null to isEven", () => {
  expect(isEven(null)).toBe(false);
});

test("sends undefined to isEven", () => {
  expect(isEven(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isEven", () => {
  expect(isEven(s1)).toBe(false);
});

test("sends true to isEven", () => {
  expect(isEven(true)).toBe(false);
});

test("sends false to isEven", () => {
  expect(isEven(false)).toBe(false);
});

test("sends string to isEven", () => {
  expect(isEven("string")).toBe(false);
});

test("sends positive even integer to isEven", () => {
  expect(isEven(2)).toBe(true);
});

test("sends positive odd integer to isEven", () => {
  expect(isEven(1)).toBe(false);
});

test("sends zero to isEven", () => {
  expect(isEven(0)).toBe(true);
});

test("sends positive float to isEven", () => {
  expect(isEven(1.1)).toBe(false);
});

test("sends negative odd integer to isEven", () => {
  expect(isEven(-1)).toBe(false);
});

test("sends negative even integer to isEven", () => {
  expect(isEven(-2)).toBe(true);
});

test("sends negative float to isEven", () => {
  expect(isEven(-1.1)).toBe(false);
});

test("sends object to isEven", () => {
  expect(isEven({})).toBe(false);
});

test("sends empty array to isEven", () => {
  expect(isEven([])).toBe(false);
});

test("sends array of 1 integer to isEven", () => {
  expect(isEven([2])).toBe(false);
});

test("sends array of 2 integers to isEven", () => {
  expect(isEven([2,1])).toBe(false);
});

test("sends array of 1 integer to isEven", () => {
  expect(isEven([2.1])).toBe(false);
});

test("sends array of 2 integers to isEven", () => {
  expect(isEven([2.1,1.1])).toBe(false);
});

test("sends array to isEven", () => {
  expect(isEven(["white", "grey", "black"])).toBe(false);
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

test("sends json to isEven", () => {
  expect(isEven(json)).toBe(false);
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

test("sends invalid json to isEven", () => {
  expect(isEven(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isEven", () => {
  expect(isEven(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isEven", () => {
  expect(isEven(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isEven", () => {
  expect(isEven(node)).toBe(false);
});

test("sends regex to isEven", () => {
  expect(isEven(/ab+c/i)).toBe(false);
});
