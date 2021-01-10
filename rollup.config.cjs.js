import resolve from "@rollup/plugin-node-resolve";
import progress from "rollup-plugin-progress";
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import analyze from "rollup-plugin-analyzer";

const limitBytes = 1e6;

const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return;
  console.log(`Bundle size exceeds ${limitBytes} bytes: ${bundleSize} bytes`);
  return process.exit(1);
};

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
    progress({
      clearLine: true // default: true
    }),
    sizes(),
    sizeSnapshot(),
    analyze({ onAnalysis, skipFormatted: false })
  ]
};