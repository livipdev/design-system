import PropTypes from 'prop-types';

import { SCREEN_SIZES } from '@livip/core/styles/theme/constants';

const propTypes = {
  maxWidth: PropTypes.oneOf(Object.values(SCREEN_SIZES)),
};

export default propTypes;
