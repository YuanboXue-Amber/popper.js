/* eslint-disable */
const fs = require('fs');

const dist = `./${process.env.PACKAGE}/dist/`;
const files = fs.readdirSync(dist);

files.forEach(file => {
  const path = `${dist}/${file}`;
  const str = fs.readFileSync(path, 'utf8');

  fs.writeFileSync(
    path,
    str.replace(`'../utils/detectOverflow'`, `'@popperjs/core'`)
  );
});
