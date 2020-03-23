import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  xs: Grid.propTypes.xs.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
