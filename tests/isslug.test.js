import { isSlug } from "../dist/ch";

test("sends slug to isSlug", () => {
  expect(isSlug('this_is-a_slug')).toBe(true);
});

test("sends null to isSlug", () => {
  expect(isSlug(null)).toBe(false);
});

test("sends undefined to isSlug", () => {
  expect(isSlug(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isSlug", () => {
  expect(isSlug(s1)).toBe(false);
});

test("sends true to isSlug", () => {
  expect(isSlug(true)).toBe(false);
});

test("sends false to isSlug", () => {
  expect(isSlug(false)).toBe(false);
});

test("sends string to isSlug", () => {
  expect(isSlug("string")).toBe(true);
});

test("sends positive even integer to isSlug", () => {
  expect(isSlug(2)).toBe(false);
});

test("sends positive odd integer to isSlug", () => {
  expect(isSlug(1)).toBe(false);
});

test("sends zero to isSlug", () => {
  expect(isSlug(0)).toBe(false);
});

test("sends positive float to isSlug", () => {
  expect(isSlug(1.1)).toBe(false);
});

test("sends negative odd integer to isSlug", () => {
  expect(isSlug(-1)).toBe(false);
});

test("sends negative even integer to isSlug", () => {
  expect(isSlug(-2)).toBe(false);
});

test("sends negative float to isSlug", () => {
  expect(isSlug(-1.1)).toBe(false);
});

test("sends object to isSlug", () => {
  expect(isSlug({})).toBe(false);
});

test("sends empty array to isSlug", () => {
  expect(isSlug([])).toBe(false);
});

test("sends array of 1 integer to isSlug", () => {
  expect(isSlug([2])).toBe(false);
});

test("sends array of 2 integers to isSlug", () => {
  expect(isSlug([2,1])).toBe(false);
});

test("sends array of 1 integer to isSlug", () => {
  expect(isSlug([2.1])).toBe(false);
});

test("sends array of 2 integers to isSlug", () => {
  expect(isSlug([2.1,1.1])).toBe(false);
});

test("sends array to isSlug", () => {
  expect(isSlug(["white", "grey", "black"])).toBe(false);
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

test("sends json to isSlug", () => {
  expect(isSlug(json)).toBe(false);
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

test("sends invalid json to isSlug", () => {
  expect(isSlug(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isSlug", () => {
  expect(isSlug(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isSlug", () => {
  expect(isSlug(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isSlug", () => {
  expect(isSlug(node)).toBe(false);
});

test("sends regex to isSlug", () => {
  expect(isSlug(/ab+c/i)).toBe(false);
});
