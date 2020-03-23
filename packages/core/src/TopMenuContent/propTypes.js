import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  xs: Grid.propTypes.xs,
};

export default propTypes;
