import PropTypes from 'prop-types';

import Grid from '@livip/core/Grid';
import { AVAILABLE_VARIANTS } from '@livip/core/Logotype/constants';

const guttersPropTypes = {
  xs: PropTypes.number,
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(AVAILABLE_VARIANTS)),
  gutters: PropTypes.shape(guttersPropTypes),
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
