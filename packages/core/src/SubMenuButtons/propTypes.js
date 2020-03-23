import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  xs: Grid.propTypes.xs.isRequired,
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
