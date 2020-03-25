import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
