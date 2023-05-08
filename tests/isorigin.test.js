import { isOrigin } from "../dist/ch";

test("sends null to isOrigin", () => {
  expect(isOrigin(null)).toBe(false);
});

test("sends undefined to isOrigin", () => {
  expect(isOrigin(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isOrigin", () => {
  expect(isOrigin(s1)).toBe(false);
});

test("sends true to isOrigin", () => {
  expect(isOrigin(true)).toBe(false);
});

test("sends false to isOrigin", () => {
  expect(isOrigin(false)).toBe(false);
});

test("sends string to isOrigin", () => {
  expect(isOrigin("string")).toBe(false);
});

test("sends positive even integer to isOrigin", () => {
  expect(isOrigin(2)).toBe(false);
});

test("sends positive odd integer to isOrigin", () => {
  expect(isOrigin(1)).toBe(false);
});

test("sends zero to isOrigin", () => {
  expect(isOrigin(0)).toBe(true);
});

test("sends positive float to isOrigin", () => {
  expect(isOrigin(1.1)).toBe(false);
});

test("sends negative odd integer to isOrigin", () => {
  expect(isOrigin(-1)).toBe(false);
});

test("sends negative even integer to isOrigin", () => {
  expect(isOrigin(-2)).toBe(false);
});

test("sends negative float to isOrigin", () => {
  expect(isOrigin(-1.1)).toBe(false);
});

test("sends object to isOrigin", () => {
  expect(isOrigin({})).toBe(false);
});

test("sends empty array to isOrigin", () => {
  expect(isOrigin([])).toBe(false);
});

test("sends array of 1 integer to isOrigin", () => {
  expect(isOrigin([2])).toBe(false);
});

test("sends array of 2 integers to isOrigin", () => {
  expect(isOrigin([2,1])).toBe(false);
});

test("sends array of 1 integer to isOrigin", () => {
  expect(isOrigin([2.1])).toBe(false);
});

test("sends array of 2 integers to isOrigin", () => {
  expect(isOrigin([2.1,1.1])).toBe(false);
});

test("sends array to isOrigin", () => {
  expect(isOrigin(["white", "grey", "black"])).toBe(false);
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

test("sends json to isOrigin", () => {
  expect(isOrigin(json)).toBe(false);
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

test("sends invalid json to isOrigin", () => {
  expect(isOrigin(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isOrigin", () => {
  expect(isOrigin(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isOrigin", () => {
  expect(isOrigin(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isOrigin", () => {
  expect(isOrigin(node)).toBe(false);
});

test("sends regex to isOrigin", () => {
  expect(isOrigin(/ab+c/i)).toBe(false);
});
