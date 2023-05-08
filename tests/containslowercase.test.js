import { containsLowerCase } from "../dist/ch";

test("sends salUt character to containsLowerCase", () => {
  expect(containsLowerCase('salUt')).toBe(true);
});

test("sends SALUT character to containsLowerCase", () => {
  expect(containsLowerCase('SALUT')).toBe(false);
});

test("sends sALUT character to containsLowerCase", () => {
  expect(containsLowerCase('sALUT')).toBe(true);
});

test("sends SaLUT character to containsLowerCase", () => {
  expect(containsLowerCase('SaLUT')).toBe(true);
});

test("sends SALUt character to containsLowerCase", () => {
  expect(containsLowerCase('SALUt')).toBe(true);
});

test("sends string without uppercase character to containsLowerCase", () => {
  expect(containsLowerCase('salut')).toBe(true);
});

test("sends null to containsLowerCase", () => {
  expect(containsLowerCase(null)).toBe(false);
});

test("sends undefined to containsLowerCase", () => {
  expect(containsLowerCase(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to containsLowerCase", () => {
  expect(containsLowerCase(s1)).toBe(false);
});

test("sends true to containsLowerCase", () => {
  expect(containsLowerCase(true)).toBe(false);
});

test("sends false to containsLowerCase", () => {
  expect(containsLowerCase(false)).toBe(false);
});

test("sends string to containsLowerCase", () => {
  expect(containsLowerCase("string")).toBe(true);
});

test("sends positive even integer to containsLowerCase", () => {
  expect(containsLowerCase(2)).toBe(false);
});

test("sends positive odd integer to containsLowerCase", () => {
  expect(containsLowerCase(1)).toBe(false);
});

test("sends zero to containsLowerCase", () => {
  expect(containsLowerCase(0)).toBe(false);
});

test("sends positive float to containsLowerCase", () => {
  expect(containsLowerCase(1.1)).toBe(false);
});

test("sends negative odd integer to containsLowerCase", () => {
  expect(containsLowerCase(-1)).toBe(false);
});

test("sends negative even integer to containsLowerCase", () => {
  expect(containsLowerCase(-2)).toBe(false);
});

test("sends negative float to containsLowerCase", () => {
  expect(containsLowerCase(-1.1)).toBe(false);
});

test("sends object to containsLowerCase", () => {
  expect(containsLowerCase({})).toBe(false);
});

test("sends empty array to containsLowerCase", () => {
  expect(containsLowerCase([])).toBe(false);
});

test("sends array of 1 integer to containsLowerCase", () => {
  expect(containsLowerCase([2])).toBe(false);
});

test("sends array of 2 integers to containsLowerCase", () => {
  expect(containsLowerCase([2,1])).toBe(false);
});

test("sends array of 1 integer to containsLowerCase", () => {
  expect(containsLowerCase([2.1])).toBe(false);
});

test("sends array of 2 integers to containsLowerCase", () => {
  expect(containsLowerCase([2.1,1.1])).toBe(false);
});

test("sends array to containsLowerCase", () => {
  expect(containsLowerCase(["white", "grey", "black"])).toBe(false);
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

test("sends json to containsLowerCase", () => {
  expect(containsLowerCase(json)).toBe(true);
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

test("sends invalid json to containsLowerCase", () => {
  expect(containsLowerCase(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to containsLowerCase", () => {
  expect(containsLowerCase(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to containsLowerCase", () => {
  expect(containsLowerCase(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to containsLowerCase", () => {
  expect(containsLowerCase(node)).toBe(false);
});

test("sends regex to containsLowerCase", () => {
  expect(containsLowerCase(/ab+c/i)).toBe(false);
});
