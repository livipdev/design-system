const padding = require('./padding');
const { ORG } = require('./constants');

const transformers = {
  padding,
};

const register = (dictionary) => {
  registerTransformers(dictionary);
  registerTransformGroup(dictionary);
};

const registerTransformers = (dictionary) => (
  Object.values(transformers).map((transformer) => transformer(dictionary))
);

const registerTransformGroup = (dictionary) => (
  dictionary.registerTransformGroup({
    name: `${ORG}/js`,
    transforms: ['livip/padding', ...dictionary.transformGroup.js],
  })
);

module.exports = {
  register,
};
