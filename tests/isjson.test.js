import { isJson } from "../dist/ch";

test("sends null to isJson", () => {
  expect(isJson(null)).toBe(false);
});

test("sends undefined to isJson", () => {
  expect(isJson(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isJson", () => {
  expect(isJson(s1)).toBe(false);
});

test("sends true to isJson", () => {
  expect(isJson(true)).toBe(false);
});

test("sends false to isJson", () => {
  expect(isJson(false)).toBe(false);
});

test("sends string to isJson", () => {
  expect(isJson("string")).toBe(false);
});

test("sends positive even integer to isJson", () => {
  expect(isJson(2)).toBe(false);
});

test("sends positive odd integer to isJson", () => {
  expect(isJson(1)).toBe(false);
});

test("sends zero to isJson", () => {
  expect(isJson(0)).toBe(false);
});

test("sends positive float to isJson", () => {
  expect(isJson(1.1)).toBe(false);
});

test("sends negative odd integer to isJson", () => {
  expect(isJson(-1)).toBe(false);
});

test("sends negative even integer to isJson", () => {
  expect(isJson(-2)).toBe(false);
});

test("sends negative float to isJson", () => {
  expect(isJson(-1.1)).toBe(false);
});

test("sends object to isJson", () => {
  expect(isJson({})).toBe(false);
});

test("sends empty array to isJson", () => {
  expect(isJson([])).toBe(false);
});

test("sends array of 1 integer to isJson", () => {
  expect(isJson([2])).toBe(false);
});

test("sends array of 2 integers to isJson", () => {
  expect(isJson([2,1])).toBe(false);
});

test("sends array of 1 integer to isJson", () => {
  expect(isJson([2.1])).toBe(false);
});

test("sends array of 2 integers to isJson", () => {
  expect(isJson([2.1,1.1])).toBe(false);
});

test("sends array to isJson", () => {
  expect(isJson(["white", "grey", "black"])).toBe(false);
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

test("sends json to isJson", () => {
  expect(isJson(json)).toBe(true);
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

test("sends invalid json to isJson", () => {
  expect(isJson(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isJson", () => {
  expect(isJson(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isJson", () => {
  expect(isJson(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isJson", () => {
  expect(isJson(node)).toBe(false);
});

test("sends regex to isJson", () => {
  expect(isJson(/ab+c/i)).toBe(false);
});
