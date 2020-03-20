/* eslint-disable */
import createRollupConfig from '../build-utils/createRollupConfig';

export default createRollupConfig({
  modifierName: process.env.MODIFIER_NAME,
  packageName: process.env.PACKAGE_NAME
});
