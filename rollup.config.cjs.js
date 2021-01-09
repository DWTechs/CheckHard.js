import resolve from "@rollup/plugin-node-resolve";
// import babel from "@rollup/plugin-babel";

module.exports = {
  input: "build/es6/ch.js",
  output: {
    name: "CH",
    file: "build/ch.cjs.js",
    format: "cjs"
  },
  external: [
  ],
  plugins: [
    resolve(),
    // babel({ 
    //   // babelHelpers: 'bundled',
    //   babelrc: false,
		//   presets: [
    //     ["@babel/env", 
    //       { 
    //         // modules: false,
    //         targets: {
    //           node: "current"
    //         }
    //       }
    //     ]
    //   ]
  
    // })
  ]
};