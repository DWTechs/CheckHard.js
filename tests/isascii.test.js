import { isAscii } from "../dist/ch";

test("sends null to isAscii extended", () => {
  expect(isAscii(null)).toBe(false);
});

test("sends undefined to isAscii", () => {
  expect(isAscii(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isAscii", () => {
  expect(isAscii(s1)).toBe(false);
});

test("sends true to isAscii extended", () => {
  expect(isAscii(true)).toBe(false);
});

test("sends false to isAscii extended", () => {
  expect(isAscii(false)).toBe(false);
});

test("sends string to isAscii extended", () => {
  expect(isAscii("string")).toBe(false);
});

test("sends number as string to isAscii extended", () => {
  expect(isAscii("2")).toBe(true);
});

test("sends 256 as string to isAscii extended", () => {
  expect(isAscii("256")).toBe(false);
});

test("sends positive even integer to isAscii not extended", () => {
  expect(isAscii(2, false)).toBe(true);
});

test("sends positive odd integer to isAscii not extended", () => {
  expect(isAscii(1, false)).toBe(true);
});

test("sends zero to isAscii not extended", () => {
  expect(isAscii(0, false)).toBe(true);
});

test("sends positive float to isAscii not extended", () => {
  expect(isAscii(1.1, false)).toBe(false);
});

test("sends negative odd integer to isAscii not extended", () => {
  expect(isAscii(-1, false)).toBe(false);
});

test("sends negative even integer to isAscii not extended", () => {
  expect(isAscii(-2, false)).toBe(false);
});

test("sends negative float to isAscii not extended", () => {
  expect(isAscii(-1.1, false)).toBe(false);
});

test("sends positive even integer to isAscii extended", () => {
  expect(isAscii(2)).toBe(true);
});

test("sends positive odd integer to isAscii extended", () => {
  expect(isAscii(1)).toBe(true);
});

test("sends zero to isAscii extended", () => {
  expect(isAscii(0)).toBe(true);
});

test("sends positive float to isAscii extended", () => {
  expect(isAscii(1.1)).toBe(false);
});

test("sends negative odd integer to isAscii extended", () => {
  expect(isAscii(-1)).toBe(false);
});

test("sends negative even integer to isAscii extended", () => {
  expect(isAscii(-2)).toBe(false);
});

test("sends negative float to isAscii extended", () => {
  expect(isAscii(-1.1)).toBe(false);
});

test("sends 127 to isAscii not extended", () => {
  expect(isAscii(127, false)).toBe(true);
});

test("sends 128 to isAscii not extended", () => {
  expect(isAscii(128, false)).toBe(false);
});

test("sends 255 to isAscii extended", () => {
  expect(isAscii(255)).toBe(true);
});

test("sends 256 to isAscii extended", () => {
  expect(isAscii(256)).toBe(false);
});

test("sends object to isAscii", () => {
  expect(isAscii({}, false)).toBe(false);
});

test("sends empty array to isAscii", () => {
  expect(isAscii([], false)).toBe(false);
});

test("sends array of 1 integer to isAscii", () => {
  expect(isAscii([2])).toBe(false);
});

test("sends array of 2 integers to isAscii", () => {
  expect(isAscii([2,1])).toBe(false);
});

test("sends array of 1 integer to isAscii", () => {
  expect(isAscii([2.1])).toBe(false);
});

test("sends array of 2 integers to isAscii", () => {
  expect(isAscii([2.1,1.1])).toBe(false);
});

test("sends array to isAscii not extended", () => {
  expect(isAscii(["white", "grey", "black"])).toBe(false);
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

test("sends json to isAscii not extended", () => {
  expect(isAscii(json)).toBe(false);
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

test("sends invalid json to isAscii not extended", () => {
  expect(isAscii(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isAscii not extended", () => {
  expect(isAscii(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isAscii not extended", () => {
  expect(isAscii(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isAscii not extended", () => {
  expect(isAscii(node)).toBe(false);
});

test("sends regex to isAscii", () => {
  expect(isAscii(/ab+c/i)).toBe(false);
});
