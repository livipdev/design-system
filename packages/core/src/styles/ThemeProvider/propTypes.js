import PropTypes from 'prop-types';

import themePropTypes from '../theme/propTypes';

const propTypes = {
  children: PropTypes.node.isRequired,
  theme: themePropTypes.isRequired,
  muiProps: PropTypes.shape({
    disableStylesGeneration: PropTypes.bool,
    sheetsManager: PropTypes.object,
  }),
};

export default propTypes;
