import { isHtmlEventAttribute } from "../dist/ch";

test("sends null to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(null)).toBe(false);
});

test("sends undefined to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(s1)).toBe(false);
});

test("sends true to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(true)).toBe(false);
});

test("sends false to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(false)).toBe(false);
});

test("sends string to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute("string")).toBe(false);
});

test("sends onclick to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute("onclick")).toBe(true);
});

test("sends onClick to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute("onClick")).toBe(false);
});

test("sends positive even integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(2)).toBe(false);
});

test("sends positive odd integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(1)).toBe(false);
});

test("sends zero to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(0)).toBe(false);
});

test("sends positive float to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(1.1)).toBe(false);
});

test("sends negative odd integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(-1)).toBe(false);
});

test("sends negative even integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(-2)).toBe(false);
});

test("sends negative float to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(-1.1)).toBe(false);
});

test("sends object to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute({})).toBe(false);
});

test("sends empty array to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute([])).toBe(false);
});

test("sends array of 1 integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute([2])).toBe(false);
});

test("sends array of 2 integers to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute([2,1])).toBe(false);
});

test("sends array of 1 integer to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute([2.1])).toBe(false);
});

test("sends array of 2 integers to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute([2.1,1.1])).toBe(false);
});

test("sends array to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(["white", "grey", "black"])).toBe(false);
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

test("sends json to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(json)).toBe(false);
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

test("sends invalid json to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(node)).toBe(false);
});

test("sends regex to isHtmlEventAttribute", () => {
  expect(isHtmlEventAttribute(/ab+c/i)).toBe(false);
});
