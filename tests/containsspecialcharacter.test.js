import { containsSpecialCharacter } from "../dist/ch";

test("sends string with special character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('sal&Ut')).toBe(true);
});

test("sends string with uppercase character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('salUt')).toBe(false);
});

test("sends string without uppercase character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('salut')).toBe(false);
});

test("sends null to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(null)).toBe(false);
});

test("sends undefined to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(s1)).toBe(false);
});

test("sends true to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(true)).toBe(false);
});

test("sends false to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(false)).toBe(false);
});

test("sends string to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter("string")).toBe(false);
});

test("sends positive even integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(2)).toBe(false);
});

test("sends positive odd integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(1)).toBe(false);
});

test("sends zero to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(0)).toBe(false);
});

test("sends positive float to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(1.1)).toBe(false);
});

test("sends negative odd integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(-1)).toBe(false);
});

test("sends negative even integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(-2)).toBe(false);
});

test("sends negative float to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(-1.1)).toBe(false);
});

test("sends object to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter({})).toBe(false);
});

test("sends empty array to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter([])).toBe(false);
});

test("sends array of 1 integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter([2])).toBe(false);
});

test("sends array of 2 integers to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter([2,1])).toBe(false);
});

test("sends array of 1 integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter([2.1])).toBe(false);
});

test("sends array of 2 integers to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter([2.1,1.1])).toBe(false);
});

test("sends array to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(["white", "grey", "black"])).toBe(false);
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

test("sends json to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(json)).toBe(true);
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

test("sends invalid json to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(node)).toBe(false);
});

test("sends regex to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(/ab+c/i)).toBe(false);
});
