import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const config =  {
  input: "build/es6/ch.js",
  output: {
    name: "CH",
    file: "build/ch.iife.js",
    format: "iife"
  },
  external: [], // <-- suppresses the warning
  plugins: [
    resolve(),
    // commonjs(),
    babel({
      // exclude: "node_modules/**" // only transpile our source code
    })
  ]
};

export default config;