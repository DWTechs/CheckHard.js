import { isIpAddress } from "../dist/ch";

test("sends null to isIpAddress", () => {
  expect(isIpAddress(null)).toBe(false);
});

test("sends undefined to isIpAddress", () => {
  expect(isIpAddress(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isIpAddress", () => {
  expect(isIpAddress(s1)).toBe(false);
});

test("sends true to isIpAddress", () => {
  expect(isIpAddress(true)).toBe(false);
});

test("sends false to isIpAddress", () => {
  expect(isIpAddress(false)).toBe(false);
});

test("sends string to isIpAddress", () => {
  expect(isIpAddress("string")).toBe(false);
});

test("sends positive even integer to isIpAddress", () => {
  expect(isIpAddress(2)).toBe(false);
});

test("sends positive odd integer to isIpAddress", () => {
  expect(isIpAddress(1)).toBe(false);
});

test("sends zero to isIpAddress", () => {
  expect(isIpAddress(0)).toBe(false);
});

test("sends positive float to isIpAddress", () => {
  expect(isIpAddress(1.1)).toBe(false);
});

test("sends negative odd integer to isIpAddress", () => {
  expect(isIpAddress(-1)).toBe(false);
});

test("sends negative even integer to isIpAddress", () => {
  expect(isIpAddress(-2)).toBe(false);
});

test("sends negative float to isIpAddress", () => {
  expect(isIpAddress(-1.1)).toBe(false);
});

test("sends object to isIpAddress", () => {
  expect(isIpAddress({})).toBe(false);
});

test("sends empty array to isIpAddress", () => {
  expect(isIpAddress([])).toBe(false);
});

test("sends array of 1 integer to isIpAddress", () => {
  expect(isIpAddress([2])).toBe(false);
});

test("sends array of 2 integers to isIpAddress", () => {
  expect(isIpAddress([2,1])).toBe(false);
});

test("sends array of 1 integer to isIpAddress", () => {
  expect(isIpAddress([2.1])).toBe(false);
});

test("sends array of 2 integers to isIpAddress", () => {
  expect(isIpAddress([2.1,1.1])).toBe(false);
});

test("sends array to isIpAddress", () => {
  expect(isIpAddress(["white", "grey", "black"])).toBe(false);
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

test("sends json to isIpAddress", () => {
  expect(isIpAddress(json)).toBe(false);
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

test("sends invalid json to isIpAddress", () => {
  expect(isIpAddress(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isIpAddress", () => {
  expect(isIpAddress(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isIpAddress", () => {
  expect(isIpAddress(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isIpAddress", () => {
  expect(isIpAddress(node)).toBe(false);
});

test("sends regex to isIpAddress", () => {
  expect(isIpAddress(/ab+c/i)).toBe(false);
});

test("sends abc@mail.com to isIpAddress", () => {
  expect(isIpAddress("abc@mail.com")).toBe(false);
});

test("sends 127.0.0. to isIpAddress", () => {
  expect(isIpAddress("127.0.0.")).toBe(false);
});

test("sends 127.0.0 to isIpAddress", () => {
  expect(isIpAddress("127.0.0")).toBe(false);
});

test("sends 127.0.0.0.0 to isIpAddress", () => {
  expect(isIpAddress("127.0.0.0.0")).toBe(false);
});

test("sends 127.0..0.0 to isIpAddress", () => {
  expect(isIpAddress("127.0..0.0")).toBe(false);
});

test("sends 127.0.0.0 to isIpAddress", () => {
  expect(isIpAddress("127.0.0.0")).toBe(true);
});

test("sends 127.255.255.255 to isIpAddress", () => {
  expect(isIpAddress("127.255.255.255")).toBe(true);
});

test("sends 10.0.0.0 to isIpAddress", () => {
  expect(isIpAddress("10.0.0.0")).toBe(true);
});

test("sends 10.255.255.255 to isIpAddress", () => {
  expect(isIpAddress("10.255.255.255")).toBe(true);
});

test("sends 192.168.0.0 to isIpAddress", () => {
  expect(isIpAddress("192.168.0.0")).toBe(true);
});

test("sends 192.168.255.255 to isIpAddress", () => {
  expect(isIpAddress("192.168.255.255")).toBe(true);
});

test("sends 192.88.99.0 to isIpAddress", () => {
  expect(isIpAddress("192.88.99.0")).toBe(true);
});

test("sends 192.88.99.255 to isIpAddress", () => {
  expect(isIpAddress("192.88.99.255")).toBe(true);
});
