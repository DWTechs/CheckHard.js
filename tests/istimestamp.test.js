import { isTimestamp } from "../dist/ch";

test("sends old date in string format to isTimestamp", () => {
  expect(isTimestamp('1/1/1900')).toBe(false);
});

test("sends recent date in string format to isTimestamp", () => {
  expect(isTimestamp('12/25/1965')).toBe(false);
});

const date = new Date('1/1/1900');
test("sends date object to isTimestamp", () => {
  expect(isTimestamp(date)).toBe(false);
});

test("sends null to isTimestamp", () => {
  expect(isTimestamp(null)).toBe(false);
});

test("sends timestamp to isTimestamp", () => {
  expect(isTimestamp(date.getTime())).toBe(true);
});

test("sends undefined to isTimestamp", () => {
  expect(isTimestamp(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isTimestamp", () => {
  expect(isTimestamp(s1)).toBe(false);
});

test("sends true to isTimestamp", () => {
  expect(isTimestamp(true)).toBe(false);
});

test("sends false to isTimestamp", () => {
  expect(isTimestamp(false)).toBe(false);
});

test("sends string to isTimestamp", () => {
  expect(isTimestamp("string")).toBe(false);
});

test("sends valid timestamp to isTimestamp", () => {
  expect(isTimestamp(7258114800001)).toBe(true);
});

test("sends valid timestamp as string to isTimestamp", () => {
  expect(isTimestamp("7258114800001")).toBe(false);
});

test("sends valid timestamp as string to isTimestamp, no type checking", () => {
  expect(isTimestamp("7258114800001", false)).toBe(true);
});

test("sends positive string even integer to isTimestamp", () => {
  expect(isTimestamp("2")).toBe(false);
});

test("sends positive string even integer to isTimestamp, no type check", () => {
  expect(isTimestamp("2", false)).toBe(true);
});

test("sends positive string odd integer to isTimestamp", () => {
  expect(isTimestamp("1")).toBe(false);
});

test("sends positive string odd integer to isTimestamp, no type check", () => {
  expect(isTimestamp("1", false)).toBe(true);
});

test("sends zero to isTimestamp", () => {
  expect(isTimestamp("0")).toBe(false);
});

test("sends zero to isTimestamp, no type chack", () => {
  expect(isTimestamp("0", false)).toBe(true);
});

test("sends positive even integer to isTimestamp", () => {
  expect(isTimestamp(2)).toBe(true);
});

test("sends positive odd integer to isTimestamp", () => {
  expect(isTimestamp(1)).toBe(true);
});

test("sends zero to isTimestamp", () => {
  expect(isTimestamp(0)).toBe(true);
});

test("sends positive float to isTimestamp", () => {
  expect(isTimestamp(1.1)).toBe(false);
});

test("sends negative odd integer to isTimestamp", () => {
  expect(isTimestamp(-1)).toBe(true);
});

test("sends negative even integer to isTimestamp", () => {
  expect(isTimestamp(-2)).toBe(true);
});

test("sends negative float to isTimestamp", () => {
  expect(isTimestamp(-1.1)).toBe(false);
});

test("sends object to isTimestamp", () => {
  expect(isTimestamp({})).toBe(false);
});

test("sends empty array to isTimestamp", () => {
  expect(isTimestamp([])).toBe(false);
});

test("sends array of 1 integer to isTimestamp", () => {
  expect(isTimestamp([2])).toBe(false);
});

test("sends array of 2 integers to isTimestamp", () => {
  expect(isTimestamp([2,1])).toBe(false);
});

test("sends array of 1 integer to isTimestamp", () => {
  expect(isTimestamp([2.1])).toBe(false);
});

test("sends array of 2 integers to isTimestamp", () => {
  expect(isTimestamp([2.1,1.1])).toBe(false);
});

test("sends array to isTimestamp", () => {
  expect(isTimestamp(["white", "grey", "black"])).toBe(false);
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

test("sends json to isTimestamp", () => {
  expect(isTimestamp(json)).toBe(false);
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

test("sends invalid json to isTimestamp", () => {
  expect(isTimestamp(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isTimestamp", () => {
  expect(isTimestamp(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isTimestamp", () => {
  expect(isTimestamp(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isTimestamp", () => {
  expect(isTimestamp(node)).toBe(false);
});

test("sends regex to isTimestamp", () => {
  expect(isTimestamp(/ab+c/i)).toBe(false);
});
