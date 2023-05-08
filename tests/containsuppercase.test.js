import { containsUpperCase } from "../dist/ch";

test("sends salUt character to containsUpperCase", () => {
  expect(containsUpperCase('salUt')).toBe(true);
});

test("sends Salut character to containsUpperCase", () => {
  expect(containsUpperCase('Salut')).toBe(true);
});

test("sends saluT character to containsUpperCase", () => {
  expect(containsUpperCase('saluT')).toBe(true);
});

test("sends SAlut character to containsUpperCase", () => {
  expect(containsUpperCase('SAlut')).toBe(true);
});

test("sends salUT character to containsUpperCase", () => {
  expect(containsUpperCase('salUT')).toBe(true);
});
test("sends string without uppercase character to containsUpperCase", () => {
  expect(containsUpperCase('salut')).toBe(false);
});

test("sends null to containsUpperCase", () => {
  expect(containsUpperCase(null)).toBe(false);
});

test("sends undefined to containsUpperCase", () => {
  expect(containsUpperCase(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to containsUpperCase", () => {
  expect(containsUpperCase(s1)).toBe(false);
});

test("sends true to containsUpperCase", () => {
  expect(containsUpperCase(true)).toBe(false);
});

test("sends false to containsUpperCase", () => {
  expect(containsUpperCase(false)).toBe(false);
});

test("sends string to containsUpperCase", () => {
  expect(containsUpperCase("string")).toBe(false);
});

test("sends positive even integer to containsUpperCase", () => {
  expect(containsUpperCase(2)).toBe(false);
});

test("sends positive odd integer to containsUpperCase", () => {
  expect(containsUpperCase(1)).toBe(false);
});

test("sends zero to containsUpperCase", () => {
  expect(containsUpperCase(0)).toBe(false);
});

test("sends positive float to containsUpperCase", () => {
  expect(containsUpperCase(1.1)).toBe(false);
});

test("sends negative odd integer to containsUpperCase", () => {
  expect(containsUpperCase(-1)).toBe(false);
});

test("sends negative even integer to containsUpperCase", () => {
  expect(containsUpperCase(-2)).toBe(false);
});

test("sends negative float to containsUpperCase", () => {
  expect(containsUpperCase(-1.1)).toBe(false);
});

test("sends object to containsUpperCase", () => {
  expect(containsUpperCase({})).toBe(false);
});

test("sends empty array to containsUpperCase", () => {
  expect(containsUpperCase([])).toBe(false);
});

test("sends array of 1 integer to containsUpperCase", () => {
  expect(containsUpperCase([2])).toBe(false);
});

test("sends array of 2 integers to containsUpperCase", () => {
  expect(containsUpperCase([2,1])).toBe(false);
});

test("sends array of 1 integer to containsUpperCase", () => {
  expect(containsUpperCase([2.1])).toBe(false);
});

test("sends array of 2 integers to containsUpperCase", () => {
  expect(containsUpperCase([2.1,1.1])).toBe(false);
});

test("sends array to containsUpperCase", () => {
  expect(containsUpperCase(["white", "grey", "black"])).toBe(false);
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

test("sends json to containsUpperCase", () => {
  expect(containsUpperCase(json)).toBe(true);
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

test("sends invalid json to containsUpperCase", () => {
  expect(containsUpperCase(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to containsUpperCase", () => {
  expect(containsUpperCase(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to containsUpperCase", () => {
  expect(containsUpperCase(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to containsUpperCase", () => {
  expect(containsUpperCase(node)).toBe(false);
});

test("sends regex to containsUpperCase", () => {
  expect(containsUpperCase(/ab+c/i)).toBe(false);
});
