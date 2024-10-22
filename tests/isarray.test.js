import { isArray } from "../dist/ch";

const s1 = Symbol();

test("sends null to isArray", () => {
  expect(isArray(null)).toBe(false);
});

test("sends undefined to isArray", () => {
  expect(isArray(undefined)).toBe(false);
});

test("sends symbol to isArray", () => {
  expect(isArray(s1)).toBe(false);
});

test("sends true to isArray", () => {
  expect(isArray(true)).toBe(false);
});

test("sends false to isArray", () => {
  expect(isArray(false)).toBe(false);
});

test("sends string to isArray", () => {
  expect(isArray("string")).toBe(false);
});

test("sends positive even integer to isArray", () => {
  expect(isArray(2)).toBe(false);
});

test("sends positive odd integer to isArray", () => {
  expect(isArray(1)).toBe(false);
});

test("sends zero to isArray", () => {
  expect(isArray(0)).toBe(false);
});

test("sends positive float to isArray", () => {
  expect(isArray(1.1)).toBe(false);
});

test("sends negative odd integer to isArray", () => {
  expect(isArray(-1)).toBe(false);
});

test("sends negative even integer to isArray", () => {
  expect(isArray(-2)).toBe(false);
});

test("sends negative float to isArray", () => {
  expect(isArray(-1.1)).toBe(false);
});

test("sends object to isArray", () => {
  expect(isArray({})).toBe(false);
});

test("sends empty array to isArray", () => {
  expect(isArray([])).toBe(true);
});

test("sends array of 1 integer to isArray", () => {
  expect(isArray([2])).toBe(true);
});

test("sends array of 2 integers to isArray", () => {
  expect(isArray([2,1])).toBe(true);
});

test("sends array of 1 integer to isArray", () => {
  expect(isArray([2.1])).toBe(true);
});

test("sends array of 2 integers to isArray", () => {
  expect(isArray([2.1,1.1])).toBe(true);
});

test("sends array to isArray", () => {
  expect(isArray(["white", "grey", "black"])).toBe(true);
});

test("sends array of length 3 to isArray(2)", () => {
  expect(isArray(["white", "grey", "black"], '=', 2)).toBe(false);
});

test("sends array of length 3 to isArray(3)", () => {
  expect(isArray(["white", "grey", "black"], '=', 3)).toBe(true);
});

test("sends array of length 3 to isArray(4)", () => {
  expect(isArray(["white", "grey", "black"], '=', 4)).toBe(false);
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

test("sends json to isArray", () => {
  expect(isArray(json)).toBe(false);
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

test("sends invalid json to isArray", () => {
  expect(isArray(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isArray", () => {
  expect(isArray(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isArray", () => {
  expect(isArray(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isArray", () => {
  expect(isArray(node)).toBe(false);
});

test("sends regex to isArray", () => {
  expect(isArray(/ab+c/i)).toBe(false);
});



// with length
test("sends null to isArray with length test of 2", () => {
  expect(isArray(null, '=', 2)).toBe(false);
});

test("sends undefined to isArray with length test of 2", () => {
  expect(isArray(undefined, '=', 2)).toBe(false);
});

test("sends symbol to isArray with length test of 2", () => {
  expect(isArray(s1, '=', 2)).toBe(false);
});

test("sends true to isArray with length test of 2", () => {
  expect(isArray(true, '=', 2)).toBe(false);
});

test("sends false to isArray with length test of 2", () => {
  expect(isArray(false, '=', 2)).toBe(false);
});

test("sends string to isArray with length test of 2", () => {
  expect(isArray("string", '=', 2)).toBe(false);
});

test("sends positive even integer to isArray with length test of 2", () => {
  expect(isArray(2, '=', 2)).toBe(false);
});

test("sends positive odd integer to isArray with length test of 2", () => {
  expect(isArray(1, '=', 2)).toBe(false);
});

test("sends zero to isArray with length test of 2", () => {
  expect(isArray(0, '=', 2)).toBe(false);
});

test("sends positive float to isArray with length test of 2", () => {
  expect(isArray(1.1, '=', 2)).toBe(false);
});

test("sends negative odd integer to isArray with length test of 2", () => {
  expect(isArray(-1, '=', 2)).toBe(false);
});

test("sends negative even integer to isArray with length test of 2", () => {
  expect(isArray(-2, '=', 2)).toBe(false);
});

test("sends negative float to isArray with length test of 2", () => {
  expect(isArray(-1.1, '=', 2)).toBe(false);
});

test("sends object to isArray with length test of 2", () => {
  expect(isArray({}, '=', 2)).toBe(false);
});

test("sends empty array to isArray with length test of 2", () => {
  expect(isArray([], '=', 2)).toBe(false);
});

test("sends array to isArray with length test of 3", () => {
  expect(isArray(["white", "grey", "black"], '=', 3)).toBe(true);
});

test("sends array to isArray with length test greater than 3", () => {
  expect(isArray(["white", "grey", "black"], '>', 2)).toBe(true);
});

test("sends array to isArray with length test greater than or equal to 3", () => {
  expect(isArray(["white", "grey", "black"], '>=', 2)).toBe(true);
});

test("sends array to isArray with length test lower than 4", () => {
  expect(isArray(["white", "grey", "black"], '<', 4)).toBe(true);
});

test("sends array to isArray with length test lower than or equal to 4", () => {
  expect(isArray(["white", "grey", "black"], '<=', 4)).toBe(true);
});


test("sends array of length 3 to isArray with length test of 2", () => {
  expect(isArray(["white", "grey", "black"], '=', 2)).toBe(false);
});

test("sends array of length 3 to isArray with length greater than 3", () => {
  expect(isArray(["white", "grey", "black"], '>', 3)).toBe(false);
});

test("sends array of length 3 to isArray with length test of 4", () => {
  expect(isArray(["white", "grey", "black"], '=', 4)).toBe(false);
});

test("sends json to isArray with length test of 2", () => {
  expect(isArray(json, '=', 2)).toBe(false);
});

test("sends invalid json to isArray with length test of 2", () => {
  expect(isArray(invalidjson, '=', 2)).toBe(false);
});

test("sends function to isArray with length test of 2", () => {
  expect(isArray(testFunction, '=', 2)).toBe(false);
});

test("sends htmlElement to isArray with length test of 2", () => {
  expect(isArray(para, '=', 2)).toBe(false);
});

test("sends node to isArray with length test of 2", () => {
  expect(isArray(node, '=', 2)).toBe(false);
});

test("sends regex to isArray with length test of 2", () => {
  expect(isArray(/ab+c/i, '=', 2)).toBe(false);
});

test("sends wrong comparator to isArray with length test of 2", () => {
  expect(isArray([2,4], '+', 2)).toBe(false);
});

test("sends empty array of length 0 to isArray with wrong comparator", () => {
  expect(isArray([], '<>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray([], '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(new Array(), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(Array.of(), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(Array.from([]), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(Array.from({}), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray([...[]], '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(Object.values({}), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater than 0", () => {
  expect(isArray(Object.keys({}), '>', 0)).toBe(false);
});

test("sends empty array to isArray with length test greater or equal to 1", () => {
  expect(isArray([], '>=', 1)).toBe(false);
});

test("sends empty array of length 1 to isArray with length test greater than 1", () => {
  expect(isArray(['R'], '>', 1)).toBe(false);
});

test("sends empty array of length 1 to isArray with length test greater or equal to 1", () => {
  expect(isArray(['R'], '>=', 1)).toBe(true);
});
