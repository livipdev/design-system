import PropTypes from 'prop-types';

import cardPropTypes from '../SimpleCard/propTypes';

const propTypes = {
  classes: PropTypes.object,
  contents: PropTypes.arrayOf(cardPropTypes),
  columns: PropTypes.int,
  italicDescription: PropTypes.bool,
};

export default propTypes;
