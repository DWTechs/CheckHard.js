// const path = require('path');
const fs      = require('fs');

const rel     = './';
const src     = `${rel}build/`;
const dest    = `${rel}dist/`; 
const files   = [
  {
    src:  `${rel}src/ch.d.ts`,
    dest: `${dest}ch.d.ts`
  },
  {
    src:  `${src}ch.iife.js`,
    dest: `${dest}ch.iife.js`
  },
  {
    src:  `${src}ch.iife.min.js`,
    dest: `${dest}ch.iife.min.js`
  },
  {
    src:  `${src}ch.cjs.js`,
    dest: `${dest}ch.cjs.js`
  },
  {
    src:  `${src}ch.js`,
    dest: `${dest}ch.js`
  },
];

fs.mkdir(dest, { recursive: false },(err) => {
  if (err) throw err;
  fs.readFile(`${rel}scripts/license.js`, (err, license) => {
    if (err) throw err;
    for (let file of files) {
      fs.readFile(file.src, (err, fileContent) => {
        if (err) throw err;
        fs.writeFile(file.dest, license+fileContent, (err) => {
          if (err) throw err;
        });
      });
    }
  });
});