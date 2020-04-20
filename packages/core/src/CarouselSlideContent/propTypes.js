import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from './constants';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  suptitle: PropTypes.string,
  background: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(AVAILABLE_VARIANTS)),
  classes: PropTypes.obj,
};

export default propTypes;
