import PropTypes from 'prop-types';

import { VARIANTS } from './constants';

const propTypes = {
  autoplay: PropTypes.bool,
  stopOnHover: PropTypes.bool,
  intervalInMilliseconds: PropTypes.int,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
};

export default propTypes;
