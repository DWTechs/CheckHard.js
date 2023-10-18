import { isJWT } from "../dist/ch";

test("sends null to isJWT", () => {
  expect(isJWT(null)).toBe(false);
});

test("sends undefined to isJWT", () => {
  expect(isJWT(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isJWT", () => {
  expect(isJWT(s1)).toBe(false);
});

test("sends true to isJWT", () => {
  expect(isJWT(true)).toBe(false);
});

test("sends false to isJWT", () => {
  expect(isJWT(false)).toBe(false);
});

test("sends string to isJWT", () => {
  expect(isJWT("string")).toBe(false);
});

test("sends valid JWT to isJWT", () => {
  expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")).toBe(true);
});

test("sends invalid JWT to isJWT", () => {
  expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ")).toBe(false);
});

test("sends positive even integer to isJWT", () => {
  expect(isJWT(2)).toBe(false);
});

test("sends positive odd integer to isJWT", () => {
  expect(isJWT(1)).toBe(false);
});

test("sends zero to isJWT", () => {
  expect(isJWT(0)).toBe(false);
});

test("sends positive float to isJWT", () => {
  expect(isJWT(1.1)).toBe(false);
});

test("sends negative odd integer to isJWT", () => {
  expect(isJWT(-1)).toBe(false);
});

test("sends negative even integer to isJWT", () => {
  expect(isJWT(-2)).toBe(false);
});

test("sends negative float to isJWT", () => {
  expect(isJWT(-1.1)).toBe(false);
});

test("sends object to isJWT", () => {
  expect(isJWT({})).toBe(false);
});

test("sends empty array to isJWT", () => {
  expect(isJWT([])).toBe(false);
});

test("sends array of 1 integer to isJWT", () => {
  expect(isJWT([2])).toBe(false);
});

test("sends array of 2 integers to isJWT", () => {
  expect(isJWT([2,1])).toBe(false);
});

test("sends array of 1 integer to isJWT", () => {
  expect(isJWT([2.1])).toBe(false);
});

test("sends array of 2 integers to isJWT", () => {
  expect(isJWT([2.1,1.1])).toBe(false);
});

test("sends array to isJWT", () => {
  expect(isJWT(["white", "grey", "black"])).toBe(false);
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

test("sends json to isJWT", () => {
  expect(isJWT(json)).toBe(false);
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

test("sends invalid json to isJWT", () => {
  expect(isJWT(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isJWT", () => {
  expect(isJWT(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isJWT", () => {
  expect(isJWT(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isJWT", () => {
  expect(isJWT(node)).toBe(false);
});

test("sends regex to isJWT", () => {
  expect(isJWT(/ab+c/i)).toBe(false);
});
