import { isValidDate } from "../dist/ch";

// min: number = -2208988800000
// max: number = 7258118400000

test("sends invalid negative timestamp to isValidDate", () => {
  expect(isValidDate(-2208988800001)).toBe(false);
});

test("sends invalid timestamp to isValidDate", () => {
  expect(isValidDate(7258118400001)).toBe(false);
});

test("sends invalid date as string to isValidDate with min & max", () => {
  expect(isValidDate('1/5/1800', '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends invalid date to isValidDate with min & max", () => {
  expect(isValidDate(new Date('1/5/1800'), '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends valid date as string to isValidDate with min & max", () => {
  expect(isValidDate('1/5/1900', '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends valid date as string to isValidDate", () => {
  expect(isValidDate(new Date('1/5/1900'))).toBe(true);
});

test("sends valid date as string to isValidDate with min & max", () => {
  expect(isValidDate(new Date('1/5/1900'), new Date('1/1/1900'), new Date('1/1/1901'))).toBe(true);
});

test("sends date in string format to isValidDate", () => {
  expect(isValidDate('1/1/1900')).toBe(false);
});

const date = new Date('1/1/1900');
test("sends date object to isValidDate", () => {
  expect(isValidDate(date)).toBe(true);
});

test("sends null to isValidDate", () => {
  expect(isValidDate(null)).toBe(false);
});

test("sends timestamp to isValidDate", () => {
  expect(isValidDate(date.getTime())).toBe(false);
});

test("sends undefined to isValidDate", () => {
  expect(isValidDate(undefined)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to isValidDate", () => {
//   expect(isValidDate(s1)).toBe(false);
// });

test("sends true to isValidDate", () => {
  expect(isValidDate(true)).toBe(false);
});

test("sends false to isValidDate", () => {
  expect(isValidDate(false)).toBe(false);
});

test("sends string to isValidDate", () => {
  expect(isValidDate("string")).toBe(false);
});

test("sends positive even integer to isValidDate", () => {
  expect(isValidDate(2)).toBe(false);
});

test("sends positive odd integer to isValidDate", () => {
  expect(isValidDate(1)).toBe(false);
});

test("sends zero to isValidDate", () => {
  expect(isValidDate(0)).toBe(false);
});

test("sends positive float to isValidDate", () => {
  expect(isValidDate(1.1)).toBe(false);
});

test("sends negative odd integer to isValidDate", () => {
  expect(isValidDate(-1)).toBe(false);
});

test("sends negative even integer to isValidDate", () => {
  expect(isValidDate(-2)).toBe(false);
});

test("sends negative float to isValidDate", () => {
  expect(isValidDate(-1.1)).toBe(false);
});

test("sends object to isValidDate", () => {
  expect(isValidDate({})).toBe(false);
});

test("sends empty array to isValidDate", () => {
  expect(isValidDate([])).toBe(false);
});

test("sends array of 1 integer to isValidDate", () => {
  expect(isValidDate([2])).toBe(false);
});

test("sends array of 2 integers to isValidDate", () => {
  expect(isValidDate([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidDate", () => {
  expect(isValidDate([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidDate", () => {
  expect(isValidDate([2.1,1.1])).toBe(false);
});

test("sends array to isValidDate", () => {
  expect(isValidDate(["white", "grey", "black"])).toBe(false);
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

test("sends json to isValidDate", () => {
  expect(isValidDate(json)).toBe(false);
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

test("sends invalid json to isValidDate", () => {
  expect(isValidDate(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isValidDate", () => {
  expect(isValidDate(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isValidDate", () => {
  expect(isValidDate(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isValidDate", () => {
  expect(isValidDate(node)).toBe(false);
});

test("sends regex to isValidDate", () => {
  expect(isValidDate(/ab+c/i)).toBe(false);
});
