const spaces = require('./spaces');
const { ORG } = require('./constants');

const transformers = {
  spaces,
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
    transforms: ['livip/spaces', ...dictionary.transformGroup.js],
  })
);

module.exports = {
  register,
};
