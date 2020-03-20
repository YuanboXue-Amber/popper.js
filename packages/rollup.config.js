/* eslint-disable */
import babel from 'rollup-plugin-babel';

const modifier = process.env.MODIFIER;
const pkg = process.env.PACKAGE;

const common = {
  input: `../src/modifiers/${modifier}.js`,
  external: ['../utils/detectOverflow'],
  plugins: [babel({configFile: './babel.config.js'})]
};

const file = `./${pkg}/dist/${pkg}`;

export default [
  {
    ...common,
    output: {
      file: `${file}.cjs.js`,
      format: 'cjs'
    }
  },
  {
    ...common,
    output: {
      file: `${file}.esm.js`,
      format: 'esm'
    }
  }
];
