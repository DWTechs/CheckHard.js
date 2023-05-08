import { isOdd } from "../dist/ch";

test("sends null to isOdd", () => {
  expect(isOdd(null)).toBe(false);
});

test("sends undefined to isOdd", () => {
  expect(isOdd(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isOdd", () => {
  expect(isOdd(s1)).toBe(false);
});

test("sends true to isOdd", () => {
  expect(isOdd(true)).toBe(false);
});

test("sends false to isOdd", () => {
  expect(isOdd(false)).toBe(false);
});

test("sends string to isOdd", () => {
  expect(isOdd("string")).toBe(false);
});

test("sends positive even integer to isOdd", () => {
  expect(isOdd(2)).toBe(false);
});

test("sends positive odd integer to isOdd", () => {
  expect(isOdd(1)).toBe(true);
});

test("sends zero to isOdd", () => {
  expect(isOdd(0)).toBe(false);
});

test("sends positive float to isOdd", () => {
  expect(isOdd(1.1)).toBe(false);
});

test("sends negative odd integer to isOdd", () => {
  expect(isOdd(-1)).toBe(true);
});

test("sends negative even integer to isOdd", () => {
  expect(isOdd(-2)).toBe(false);
});

test("sends negative float to isOdd", () => {
  expect(isOdd(-1.1)).toBe(false);
});

test("sends object to isOdd", () => {
  expect(isOdd({})).toBe(false);
});

test("sends empty array to isOdd", () => {
  expect(isOdd([])).toBe(false);
});

test("sends array of 1 integer to isOdd", () => {
  expect(isOdd([2])).toBe(false);
});

test("sends array of 2 integers to isOdd", () => {
  expect(isOdd([2,1])).toBe(false);
});

test("sends array of 1 integer to isOdd", () => {
  expect(isOdd([2.1])).toBe(false);
});

test("sends array of 2 integers to isOdd", () => {
  expect(isOdd([2.1,1.1])).toBe(false);
});

test("sends array to isOdd", () => {
  expect(isOdd(["white", "grey", "black"])).toBe(false);
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

test("sends json to isOdd", () => {
  expect(isOdd(json)).toBe(false);
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

test("sends invalid json to isOdd", () => {
  expect(isOdd(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isOdd", () => {
  expect(isOdd(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isOdd", () => {
  expect(isOdd(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isOdd", () => {
  expect(isOdd(node)).toBe(false);
});

test("sends regex to isOdd", () => {
  expect(isOdd(/ab+c/i)).toBe(false);
});
