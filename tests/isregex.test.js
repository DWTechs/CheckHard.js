import { isRegex } from "../dist/ch";

test("sends null to isRegex", () => {
  expect(isRegex(null)).toBe(false);
});

test("sends undefined to isRegex", () => {
  expect(isRegex(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isRegex", () => {
  expect(isRegex(s1)).toBe(false);
});

test("sends true to isRegex", () => {
  expect(isRegex(true)).toBe(false);
});

test("sends false to isRegex", () => {
  expect(isRegex(false)).toBe(false);
});

test("sends string to isRegex", () => {
  expect(isRegex("string")).toBe(false);
});

test("sends positive even integer to isRegex", () => {
  expect(isRegex(2)).toBe(false);
});

test("sends positive odd integer to isRegex", () => {
  expect(isRegex(1)).toBe(false);
});

test("sends zero to isRegex", () => {
  expect(isRegex(0)).toBe(false);
});

test("sends positive float to isRegex", () => {
  expect(isRegex(1.1)).toBe(false);
});

test("sends negative odd integer to isRegex", () => {
  expect(isRegex(-1)).toBe(false);
});

test("sends negative even integer to isRegex", () => {
  expect(isRegex(-2)).toBe(false);
});

test("sends negative float to isRegex", () => {
  expect(isRegex(-1.1)).toBe(false);
});

test("sends object to isRegex", () => {
  expect(isRegex({})).toBe(false);
});

test("sends empty array to isRegex", () => {
  expect(isRegex([])).toBe(false);
});

test("sends array of 1 integer to isRegex", () => {
  expect(isRegex([2])).toBe(false);
});

test("sends array of 2 integers to isRegex", () => {
  expect(isRegex([2,1])).toBe(false);
});

test("sends array of 1 integer to isRegex", () => {
  expect(isRegex([2.1])).toBe(false);
});

test("sends array of 2 integers to isRegex", () => {
  expect(isRegex([2.1,1.1])).toBe(false);
});

test("sends array to isRegex", () => {
  expect(isRegex(["white", "grey", "black"])).toBe(false);
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

test("sends json to isRegex", () => {
  expect(isRegex(json)).toBe(false);
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

test("sends invalid json to isRegex", () => {
  expect(isRegex(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isRegex", () => {
  expect(isRegex(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isRegex", () => {
  expect(isRegex(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isRegex", () => {
  expect(isRegex(node)).toBe(false);
});

test("sends stringified regex to isRegex", () => {
  expect(isRegex("/ab+c/i")).toBe(false);
});

test("sends stringified regex to isRegex without typeCheck", () => {
  expect(isRegex("/ab+c/i", false)).toBe(true);
});

test("sends regex to isRegex", () => {
  expect(isRegex(/ab+c/i)).toBe(true);
});

test("sends stringified invalid regex to isRegex", () => {
  expect(isRegex("/[/i")).toBe(false);
});

test("sends stringified invalid regex to isRegex without typeCheck", () => {
  expect(isRegex("/[/i", false)).toBe(false);
});
