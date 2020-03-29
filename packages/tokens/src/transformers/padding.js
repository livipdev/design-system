const createSpacing = require('@material-ui/core/styles/createSpacing').default;
const { ORG } = require('./constants');

const match = (prop) => (
  prop.group === 'spacing'
);

const handler = (prop) => createSpacing(16)(prop.value);

const padding = (dictionary) => dictionary.registerTransform({
  name: `${ORG}/padding`,
  type: 'value',
  matcher: match,
  transformer: handler,
});

module.exports = padding;
