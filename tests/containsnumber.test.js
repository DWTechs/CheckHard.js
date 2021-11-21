import { containsNumber } from "../dist/ch";

test("sends null to containsNumber", () => {
  expect(containsNumber(null)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true)).toBe(false);
});

test("sends 1+true to containsNumber", () => {
  expect(containsNumber(1+true)).toBe(true);
});

test("sends +true to containsNumber", () => {
  expect(containsNumber(+true)).toBe(true);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true')).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string")).toBe(false);
});

test("sends positive even integer to containsNumber", () => {
  expect(containsNumber(2)).toBe(true);
});

test("sends positive odd integer to containsNumber", () => {
  expect(containsNumber(1)).toBe(true);
});

test("sends zero to containsNumber", () => {
  expect(containsNumber(0)).toBe(true);
});

test("sends positive float to containsNumber", () => {
  expect(containsNumber(1.1)).toBe(true);
});

test("sends negative odd integer to containsNumber", () => {
  expect(containsNumber(-1)).toBe(true);
});

test("sends negative even integer to containsNumber", () => {
  expect(containsNumber(-2)).toBe(true);
});

test("sends negative float to containsNumber", () => {
  expect(containsNumber(-1.1)).toBe(true);
});


test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2')).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1')).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0')).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1')).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1')).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2')).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1')).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5')).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44')).toBe(true);
});

test("sends 8e5 to containsNumber", () => {
  expect(containsNumber(8e5)).toBe(true);
});

test("sends 0x44 to containsNumber", () => {
  expect(containsNumber(0x44)).toBe(true);
});

test("sends object to containsNumber", () => {
  expect(containsNumber({})).toBe(false);
});

test("sends empty array to containsNumber", () => {
  expect(containsNumber([])).toBe(false);
});

test("sends array to containsNumber", () => {
  expect(containsNumber(["white", "grey", "black"])).toBe(false);
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

test("sends json to containsNumber", () => {
  expect(containsNumber(json)).toBe(true);
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

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to containsNumber", () => {
  expect(containsNumber(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to containsNumber", () => {
  expect(containsNumber(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to containsNumber", () => {
  expect(containsNumber(node)).toBe(false);
});

test("sends regex to containsNumber", () => {
  expect(containsNumber(/ab+c/i)).toBe(false);
});
