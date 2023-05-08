import { isDate } from "../dist/ch";

test("sends date in string format to isDate", () => {
  expect(isDate('1/1/1900')).toBe(false);
});

const date = new Date('1/1/1900');
test("sends date object to isDate", () => {
  expect(isDate(date)).toBe(true);
});

test("sends null to isDate", () => {
  expect(isDate(null)).toBe(false);
});

test("sends undefined to isDate", () => {
  expect(isDate(undefined)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to isDate", () => {
//   expect(isDate(s1)).toBe(false);
// });

test("sends true to isDate", () => {
  expect(isDate(true)).toBe(false);
});

test("sends false to isDate", () => {
  expect(isDate(false)).toBe(false);
});

test("sends string to isDate", () => {
  expect(isDate("string")).toBe(false);
});

test("sends positive even integer to isDate", () => {
  expect(isDate(2)).toBe(false);
});

test("sends positive odd integer to isDate", () => {
  expect(isDate(1)).toBe(false);
});

test("sends zero to isDate", () => {
  expect(isDate(0)).toBe(false);
});

test("sends positive float to isDate", () => {
  expect(isDate(1.1)).toBe(false);
});

test("sends negative odd integer to isDate", () => {
  expect(isDate(-1)).toBe(false);
});

test("sends negative even integer to isDate", () => {
  expect(isDate(-2)).toBe(false);
});

test("sends negative float to isDate", () => {
  expect(isDate(-1.1)).toBe(false);
});

test("sends object to isDate", () => {
  expect(isDate({})).toBe(false);
});

test("sends empty array to isDate", () => {
  expect(isDate([])).toBe(false);
});

test("sends array of 1 integer to isDate", () => {
  expect(isDate([2])).toBe(false);
});

test("sends array of 2 integers to isDate", () => {
  expect(isDate([2,1])).toBe(false);
});

test("sends array of 1 integer to isDate", () => {
  expect(isDate([2.1])).toBe(false);
});

test("sends array of 2 integers to isDate", () => {
  expect(isDate([2.1,1.1])).toBe(false);
});

test("sends array to isDate", () => {
  expect(isDate(["white", "grey", "black"])).toBe(false);
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

test("sends json to isDate", () => {
  expect(isDate(json)).toBe(false);
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

test("sends invalid json to isDate", () => {
  expect(isDate(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isDate", () => {
  expect(isDate(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isDate", () => {
  expect(isDate(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isDate", () => {
  expect(isDate(node)).toBe(false);
});

test("sends regex to isDate", () => {
  expect(isDate(/ab+c/i)).toBe(false);
});
