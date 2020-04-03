import PropTypes from 'prop-types';

import { intlProptypes } from '../Typography/propTypes';

const propTypes = {
  title: PropTypes.shape(intlProptypes).isRequired,
  subtitle: PropTypes.shape(intlProptypes),
};

export default propTypes;
