# 2.25.0 (Oct 21th 2024)

- CheckHard.js becomes Checkard.js 
- Add isValidInteger() method
- Add isValidFloat() method
- Fix isArray() method when len param is equal to zero
- Add more unit tests for isArray() method
- Improve isInteger() method

# 2.24.0 (Feb 18th 2024)

- Add emptyCheck parameter to isObject() method. Which default to false

# 2.23.0 (Jan 14th 2024)

- Add isStringOfLength() method

# 2.22.0 (Dec 29th 2023)

- Add emptyCheck parameter to isString() method. Which default to false

# 2.21.0 (Oct 18th 2023)

- Add isJWT() method
- Improve isArray() method
- Update build tools
- Code cleanup for lighter library
- Add more unit tests

# 2.20.0 (Oct 11th 2023)

- Add typeCheck parameter to isTimestamp() and isValidTimestamp() methods
- Improve types using "type predicates" for ease of use with Typescript

# 2.19.2 (May 8th 2023)

- Fix isNumber() & isTimestamp() issue with array of length one
- Add more unit tests with arrays

# 2.19.1 (October 23th 2022)

- Fix isTimestamp() issue with string values

# 2.19.0 (August 16th 2022)

- isArray() method now checks if 'array' is an array and optionally if it is of length =, <, >, <= or >= than x

# 2.18.0 (May 9th 2022)

- ContainsNumber() method now can take min and max parameters

# 2.17.2 (January 16th 2022)

- Fix isValidTimestamp() method
- Fix containsUpperCase() method
- Fix containsLowerCase() method

# 2.17.1 (November 21th 2021)

- Fix isValidDate() method
- Fix declaration file for Typescript

# 2.17.0 (November 20th 2021)

- Add isDate() method
- Add isValidDate() method
- Add isSlug() method
- Add isHexadecimal() method
- Add isTimestamp() method
- Add isValidTimestamp() method
- Add isValidNumber() method
- Add containsUpperCase() method
- Add containsLowerCase() method
- Add containsSpecialCharacter() method
- Add containsNumber() method

# 2.16.0 (March 28th 2021)

- Add 'length' parameter to isArray() method to check the length of the array

# 2.15.0 (January 11th 2021)

- Add isNil() method to test null and undefined values 
- Add isSymbol() to primitive checkers 

# 2.14.0 (January 10th 2021)

- Ch.js becomes CheckHard.js 
- Project transfered from LCluber to DWTechs

# 2.13.0 (December 6th 2020)

- Add typeCheck parameter to isNumber(), isOdd(), isOrigin(), isPositive(), isNegative(), isPowerOfTwo() methods
- Improved isNumber() performance

# 2.12.0 (September 13th 2020)

- Add IsPowerOfTwo() method

# 2.11.0 (September 11th 2020)

- IE9 compatibility for iife version
- Update Typescript to version 4

## [2.10.1](https://github.com/LCluber/Ch.js/compare/v2.10.0...v2.10.1) (2020-04-05)


### Bug Fixes

* **polyfill:** add polyfill for typeof ([8d3b01c](https://github.com/LCluber/Ch.js/commit/8d3b01c3d76c5369ddfd1dd9208ef54ce641b46b))

# [2.10.0](https://github.com/LCluber/Ch.js/compare/v2.9.0...v2.10.0) (2019-12-25)


### Features

* **validator:** added isemail and isipaddress validators ([99a2990](https://github.com/LCluber/Ch.js/commit/99a299024812211d65d5077c4b58024b60a1db62))

# [2.9.0](https://github.com/LCluber/Ch.js/compare/v2.8.0...v2.9.0) (2019-10-16)


### Features

* **isregex:** added typecheck to isregex ([22d9707](https://github.com/LCluber/Ch.js/commit/22d9707))

# [2.8.0](https://github.com/LCluber/Ch.js/compare/v2.7.1...v2.8.0) (2019-10-15)


### Features

* **isregex:** added isregex method ([b335980](https://github.com/LCluber/Ch.js/commit/b335980))

## [2.7.1](https://github.com/LCluber/Ch.js/compare/v2.7.0...v2.7.1) (2019-10-06)


### Bug Fixes

* **readme:** updated readme.md documentation ([85bbc59](https://github.com/LCluber/Ch.js/commit/85bbc59))

# [2.7.0](https://github.com/LCluber/Ch.js/compare/v2.6.2...v2.7.0) (2019-09-19)


### Features

* **commonjs:** added commonjs version of Ch.js into dist folder ([fc8dd4e](https://github.com/LCluber/Ch.js/commit/fc8dd4e))

## [2.6.2](https://github.com/LCluber/Ch.js/compare/v2.6.1...v2.6.2) (2019-08-16)


### Bug Fixes

* **es6:** ch.js is now in ES6 format ([64cecc3](https://github.com/LCluber/Ch.js/commit/64cecc3))

## [2.6.1](https://github.com/LCluber/Ch.js/compare/v2.6.0...v2.6.1) (2019-08-10)


### Bug Fixes

* **readme:** updated description of the library ([f7d429f](https://github.com/LCluber/Ch.js/commit/f7d429f))

# [2.6.0](https://github.com/LCluber/Ch.js/compare/v2.5.0...v2.6.0) (2019-08-09)

### Features

- **isascii:** now accepts integers with string type ([140eba3](https://github.com/LCluber/Ch.js/commit/140eba3))

# [2.5.0](https://github.com/LCluber/Ch.js/compare/v2.4.0...v2.5.0) (2019-08-09)

### Features

- **isfloat:** now with type checking parameter ([d4bbc2b](https://github.com/LCluber/Ch.js/commit/d4bbc2b))

# [2.4.0](https://github.com/LCluber/Ch.js/compare/v2.3.1...v2.4.0) (2019-08-08)

### Features

- **isinteger:** now with type checking parameter ([38e64e5](https://github.com/LCluber/Ch.js/commit/38e64e5))

## [2.3.1](https://github.com/LCluber/Ch.js/compare/v2.3.0...v2.3.1) (2019-07-31)

### Bug Fixes

- **readme:** updated api reference ([192074a](https://github.com/LCluber/Ch.js/commit/192074a))

# [2.3.0](https://github.com/LCluber/Ch.js/compare/v2.2.0...v2.3.0) (2019-07-31)

### Features

- **html events:** added isHTMLEventAttribute method ([beaf7ac](https://github.com/LCluber/Ch.js/commit/beaf7ac))

# [2.2.0](https://github.com/LCluber/Ch.js/compare/v2.1.1...v2.2.0) (2019-07-21)

### Features

- **numbers:** added isEven, isOdd, isOrigin, isPositive, isNegative ([61db1c5](https://github.com/LCluber/Ch.js/commit/61db1c5))

## [2.1.1](https://github.com/LCluber/Ch.js/compare/v2.1.0...v2.1.1) (2019-07-16)

### Bug Fixes

- **isfunction:** returns false if parameter is null or 0 ([4000759](https://github.com/LCluber/Ch.js/commit/4000759))

# [2.1.0](https://github.com/LCluber/Ch.js/compare/v2.0.1...v2.1.0) (2019-07-16)

### Features

- **isnumber:** added isnumber() method ([6f57267](https://github.com/LCluber/Ch.js/commit/6f57267))

## [2.0.1](https://github.com/LCluber/Ch.js/compare/v2.0.0...v2.0.1) (2019-07-15)

### Bug Fixes

- **htmlelement:** & isnode return false with null parameter ([86ceeac](https://github.com/LCluber/Ch.js/commit/86ceeac))
- **isascii:** method fixed ([b3a74c0](https://github.com/LCluber/Ch.js/commit/b3a74c0))
- **isobject:** method now returns false with array parameter ([b4c4000](https://github.com/LCluber/Ch.js/commit/b4c4000))

# [2.0.0](https://github.com/LCluber/Ch.js/compare/v1.2.0...v2.0.0) (2019-07-14)

### Bug Fixes

- **package:** fix husky pre-push command ([0c3c50a](https://github.com/LCluber/Ch.js/commit/0c3c50a))

### Features

- **ch:** now exports functions instead of a static class ([e99066c](https://github.com/LCluber/Ch.js/commit/e99066c))

### BREAKING CHANGES

- **ch:** Is.string method replaced by isString function, Is.array method replaced by
  isArray... please see README.md for exhaustive documentation

# [1.2.0](https://github.com/LCluber/Ch.js/compare/v1.1.0...v1.2.0) (2019-07-08)

### Features

- Added Is.boolean() method ([250b9cf](https://github.com/LCluber/Ch.js/commit/250b9cf))

# 1.1.0 (June 19th 2019)

- Added Is.htmlElement() method
- Added Is.node() method

# 1.0.2 (June 03rd 2019)

- Improved Is.json() method

# 1.0.1 (June 02nd 2019)

- Updated README.md

# 1.0.0 (June 01st 2019)

- Deleted Mouette.js dependency
- Is.json() method now returns a boolean

# 0.1.2 (April 07th 2019)

- Updated README.md with documentation and Yarn install command

# 0.1.1 (February 17th 2019)

- Added Is.array() method
- Added Is.float() method

# 0.1.0 (December 23th 2018)

- Initial version from Wee.js
