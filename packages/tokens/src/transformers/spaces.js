const createSpacing = require('@material-ui/core/styles/createSpacing').default;
const { ORG } = require('./constants');

const match = (prop) => (
  prop.group === 'spaces'
);

const handler = (prop) => createSpacing(16)(prop.value);

const spaces = (dictionary) => dictionary.registerTransform({
  name: `${ORG}/spaces`,
  type: 'value',
  matcher: match,
  transformer: handler,
});

module.exports = spaces;
