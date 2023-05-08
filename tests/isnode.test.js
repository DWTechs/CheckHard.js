import { isNode } from "../dist/ch";

test("sends null to isNode", () => {
  expect(isNode(null)).toBe(false);
});

test("sends undefined to isNode", () => {
  expect(isNode(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isNode", () => {
  expect(isNode(s1)).toBe(false);
});

test("sends true to isNode", () => {
  expect(isNode(true)).toBe(false);
});

test("sends false to isNode", () => {
  expect(isNode(false)).toBe(false);
});

test("sends string to isNode", () => {
  expect(isNode("string")).toBe(false);
});

test("sends positive even integer to isNode", () => {
  expect(isNode(2)).toBe(false);
});

test("sends positive odd integer to isNode", () => {
  expect(isNode(1)).toBe(false);
});

test("sends zero to isNode", () => {
  expect(isNode(0)).toBe(false);
});

test("sends positive float to isNode", () => {
  expect(isNode(1.1)).toBe(false);
});

test("sends negative odd integer to isNode", () => {
  expect(isNode(-1)).toBe(false);
});

test("sends negative even integer to isNode", () => {
  expect(isNode(-2)).toBe(false);
});

test("sends negative float to isNode", () => {
  expect(isNode(-1.1)).toBe(false);
});

test("sends object to isNode", () => {
  expect(isNode({})).toBe(false);
});

test("sends empty array to isNode", () => {
  expect(isNode([])).toBe(false);
});

test("sends array of 1 integer to isNode", () => {
  expect(isNode([2])).toBe(false);
});

test("sends array of 2 integers to isNode", () => {
  expect(isNode([2,1])).toBe(false);
});

test("sends array of 1 integer to isNode", () => {
  expect(isNode([2.1])).toBe(false);
});

test("sends array of 2 integers to isNode", () => {
  expect(isNode([2.1,1.1])).toBe(false);
});

test("sends array to isNode", () => {
  expect(isNode(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNode", () => {
  expect(isNode(json)).toBe(false);
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

test("sends invalid json to isNode", () => {
  expect(isNode(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNode", () => {
  expect(isNode(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNode", () => {
  expect(isNode(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isNode", () => {
  expect(isNode(node)).toBe(true);
});

test("sends regex to isNode", () => {
  expect(isNode(/ab+c/i)).toBe(false);
});
