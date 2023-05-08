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

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng")).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng")).toBe(true);
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

test("sends array of 1 integer to containsNumber", () => {
  expect(containsNumber([2])).toBe(true);
});

test("sends array of 2 integers to containsNumber", () => {
  expect(containsNumber([2,1])).toBe(true);
});

test("sends array of 1 integer to containsNumber", () => {
  expect(containsNumber([2.1])).toBe(true);
});

test("sends array of 2 integers to containsNumber", () => {
  expect(containsNumber([2.1,1.1])).toBe(true);
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







// with a min value of 1



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 1)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 1)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 1)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 1)).toBe(false);
});

test("sends 1+true to containsNumber", () => {
  expect(containsNumber(1+true, 1)).toBe(true);
});

test("sends +true to containsNumber", () => {
  expect(containsNumber(+true, 1)).toBe(true);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 1)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 1)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 1)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5trin6", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("Str1n6", 1)).toBe(true);
});

test("sends positive even integer to containsNumber", () => {
  expect(containsNumber(2, 1)).toBe(true);
});

test("sends positive odd integer to containsNumber", () => {
  expect(containsNumber(1, 1)).toBe(true);
});

test("sends zero to containsNumber", () => {
  expect(containsNumber(0, 1)).toBe(true);
});

test("sends positive float to containsNumber", () => {
  expect(containsNumber(1.1, 1)).toBe(true);
});

test("sends negative odd integer to containsNumber", () => {
  expect(containsNumber(-1, 1)).toBe(true);
});

test("sends negative even integer to containsNumber", () => {
  expect(containsNumber(-2, 1)).toBe(true);
});

test("sends negative float to containsNumber", () => {
  expect(containsNumber(-1.1, 1)).toBe(true);
});


test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 1)).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 1)).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 1)).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 1)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 1)).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 1)).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 1)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 1)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 1)).toBe(true);
});

test("sends 8e5 to containsNumber", () => {
  expect(containsNumber(8e5, 1)).toBe(true);
});

test("sends 0x44 to containsNumber", () => {
  expect(containsNumber(0x44, 1)).toBe(true);
});

test("sends object to containsNumber", () => {
  expect(containsNumber({}, 1)).toBe(false);
});

test("sends empty array to containsNumber", () => {
  expect(containsNumber([], 1)).toBe(false);
});

test("sends array to containsNumber", () => {
  expect(containsNumber(["white", "grey", "black"], 1)).toBe(false);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 1)).toBe(true);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 1)).toBe(true);
});

test("sends function to containsNumber", () => {
  expect(containsNumber(testFunction, 1)).toBe(false);
});

test("sends htmlElement to containsNumber", () => {
  expect(containsNumber(para, 1)).toBe(false);
});

test("sends node to containsNumber", () => {
  expect(containsNumber(node, 1)).toBe(false);
});

test("sends regex to containsNumber", () => {
  expect(containsNumber(/ab+c/i, 1)).toBe(false);
});








// with a min value of 2



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 2)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 2)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 2)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 2)).toBe(false);
});

test("sends 1+true to containsNumber", () => {
  expect(containsNumber(1+true, 2)).toBe(false);
});

test("sends +true to containsNumber", () => {
  expect(containsNumber(+true, 2)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 2)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 2)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 2)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 2)).toBe(false);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 2)).toBe(true);
});

test("sends positive even integer to containsNumber", () => {
  expect(containsNumber(2, 2)).toBe(false);
});

test("sends positive odd integer to containsNumber", () => {
  expect(containsNumber(1, 2)).toBe(false);
});

test("sends zero to containsNumber", () => {
  expect(containsNumber(0, 2)).toBe(false);
});

test("sends positive float to containsNumber", () => {
  expect(containsNumber(1.1, 2)).toBe(false);
});

test("sends negative odd integer to containsNumber", () => {
  expect(containsNumber(-1, 2)).toBe(false);
});

test("sends negative even integer to containsNumber", () => {
  expect(containsNumber(-2, 2)).toBe(false);
});

test("sends negative float to containsNumber", () => {
  expect(containsNumber(-1.1, 2)).toBe(false);
});


test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 2)).toBe(false);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 2)).toBe(false);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 2)).toBe(false);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 2)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 2)).toBe(false);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 2)).toBe(false);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 2)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 2)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 2)).toBe(true);
});

test("sends 8e5 to containsNumber", () => {
  expect(containsNumber(8e5, 2)).toBe(false);
});

test("sends 0x44 to containsNumber", () => {
  expect(containsNumber(0x44, 2)).toBe(false);
});

test("sends object to containsNumber", () => {
  expect(containsNumber({}, 2)).toBe(false);
});

test("sends empty array to containsNumber", () => {
  expect(containsNumber([], 2)).toBe(false);
});

test("sends array to containsNumber", () => {
  expect(containsNumber(["white", "grey", "black"], 2)).toBe(false);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 2)).toBe(true);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 2)).toBe(true);
});

test("sends function to containsNumber", () => {
  expect(containsNumber(testFunction, 2)).toBe(false);
});

test("sends htmlElement to containsNumber", () => {
  expect(containsNumber(para, 2)).toBe(false);
});

test("sends node to containsNumber", () => {
  expect(containsNumber(node, 2)).toBe(false);
});

test("sends regex to containsNumber", () => {
  expect(containsNumber(/ab+c/i, 2)).toBe(false);
});










// with a min value of 1 and a max value of 3



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 1, 3)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 1, 3)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 1, 3)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 1, 3)).toBe(false);
});

test("sends 1+true to containsNumber", () => {
  expect(containsNumber(1+true, 1, 3)).toBe(true);
});

test("sends +true to containsNumber", () => {
  expect(containsNumber(+true, 1, 3)).toBe(true);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 1, 3)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 1, 3)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 1, 3)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 1, 3)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 1, 3)).toBe(true);
});

test("sends string with 3 numbers to containsNumber", () => {
  expect(containsNumber("5tr1n6", 1, 3)).toBe(true);
});

test("sends string with 4 numbers to containsNumber", () => {
  expect(containsNumber("57r1n6", 1, 3)).toBe(false);
});

test("sends positive even integer to containsNumber", () => {
  expect(containsNumber(2, 1, 3)).toBe(true);
});

test("sends positive odd integer to containsNumber", () => {
  expect(containsNumber(1, 1, 3)).toBe(true);
});

test("sends zero to containsNumber", () => {
  expect(containsNumber(0, 1, 3)).toBe(true);
});

test("sends positive float to containsNumber", () => {
  expect(containsNumber(1.1, 1, 3)).toBe(true);
});

test("sends negative odd integer to containsNumber", () => {
  expect(containsNumber(-1, 1, 3)).toBe(true);
});

test("sends negative even integer to containsNumber", () => {
  expect(containsNumber(-2, 1, 3)).toBe(true);
});

test("sends negative float to containsNumber", () => {
  expect(containsNumber(-1.1, 1, 3)).toBe(true);
});


test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 1, 3)).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 1, 3)).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 1, 3)).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 1, 3)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 1, 3)).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 1, 3)).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 1, 3)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 1, 3)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 1, 3)).toBe(true);
});

test("sends 8e5 to containsNumber", () => {
  expect(containsNumber(8e5, 1, 3)).toBe(true);
});

test("sends 0x44 to containsNumber", () => {
  expect(containsNumber(0x44, 1, 3)).toBe(true);
});

test("sends object to containsNumber", () => {
  expect(containsNumber({}, 1, 3)).toBe(false);
});

test("sends empty array to containsNumber", () => {
  expect(containsNumber([], 1, 3)).toBe(false);
});

test("sends array to containsNumber", () => {
  expect(containsNumber(["white", "grey", "black"], 1, 3)).toBe(false);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 1, 3)).toBe(false);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 1, 3)).toBe(false);
});

test("sends function to containsNumber", () => {
  expect(containsNumber(testFunction, 1, 3)).toBe(false);
});

test("sends htmlElement to containsNumber", () => {
  expect(containsNumber(para, 1, 3)).toBe(false);
});

test("sends node to containsNumber", () => {
  expect(containsNumber(node, 1, 3)).toBe(false);
});

test("sends regex to containsNumber", () => {
  expect(containsNumber(/ab+c/i, 1, 3)).toBe(false);
});







// with a min value of 2 and a max value of 3



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 2, 3)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 2, 3)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 2, 3)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 2, 3)).toBe(false);
});

test("sends 1+true to containsNumber", () => {
  expect(containsNumber(1+true, 2, 3)).toBe(false);
});

test("sends +true to containsNumber", () => {
  expect(containsNumber(+true, 2, 3)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 2, 3)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 2, 3)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 2, 3)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 2, 3)).toBe(false);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 2, 3)).toBe(true);
});

test("sends string with 3 numbers to containsNumber", () => {
  expect(containsNumber("5tr1n6", 2, 3)).toBe(true);
});

test("sends string with 4 numbers to containsNumber", () => {
  expect(containsNumber("57r1n6", 2, 3)).toBe(false);
});

test("sends positive even integer to containsNumber", () => {
  expect(containsNumber(2, 2, 3)).toBe(false);
});

test("sends positive odd integer to containsNumber", () => {
  expect(containsNumber(1, 2, 3)).toBe(false);
});

test("sends zero to containsNumber", () => {
  expect(containsNumber(0, 2, 3)).toBe(false);
});

test("sends positive float to containsNumber", () => {
  expect(containsNumber(1.1, 2, 3)).toBe(false);
});

test("sends negative odd integer to containsNumber", () => {
  expect(containsNumber(-1, 2, 3)).toBe(false);
});

test("sends negative even integer to containsNumber", () => {
  expect(containsNumber(-2, 2, 3)).toBe(false);
});

test("sends negative float to containsNumber", () => {
  expect(containsNumber(-1.1, 2, 3)).toBe(false);
});


test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 2, 3)).toBe(false);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 2, 3)).toBe(false);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 2, 3)).toBe(false);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 2, 3)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 2, 3)).toBe(false);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 2, 3)).toBe(false);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 2, 3)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 2, 3)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 2, 3)).toBe(true);
});

test("sends 8e5 to containsNumber", () => {
  expect(containsNumber(8e5, 2, 3)).toBe(false);
});

test("sends 0x44 to containsNumber", () => {
  expect(containsNumber(0x44, 2, 3)).toBe(false);
});

test("sends object to containsNumber", () => {
  expect(containsNumber({}, 2, 3)).toBe(false);
});

test("sends empty array to containsNumber", () => {
  expect(containsNumber([], 2, 3)).toBe(false);
});

test("sends array to containsNumber", () => {
  expect(containsNumber(["white", "grey", "black"], 2, 3)).toBe(false);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 2, 3)).toBe(false);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 2, 3)).toBe(false);
});

test("sends function to containsNumber", () => {
  expect(containsNumber(testFunction, 2, 3)).toBe(false);
});

test("sends htmlElement to containsNumber", () => {
  expect(containsNumber(para, 2, 3)).toBe(false);
});

test("sends node to containsNumber", () => {
  expect(containsNumber(node, 2, 3)).toBe(false);
});

test("sends regex to containsNumber", () => {
  expect(containsNumber(/ab+c/i, 2, 3)).toBe(false);
});
