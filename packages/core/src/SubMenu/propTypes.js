import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const guttersPropTypes = {
  xs: Grid.propTypes.xs,
};

const contentPropTypes = {
  xs: Grid.propTypes.xs,
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  gutters: PropTypes.shape(guttersPropTypes).isRequired,
  content: PropTypes.shape(contentPropTypes),
};

export default propTypes;
