import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from '@livip/core/Logotype/constants';

const propTypes = {
  variant: PropTypes.oneOf(Object.values(AVAILABLE_VARIANTS)),
};

export default propTypes;
