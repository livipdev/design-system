import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const contentPropTypes = {
  xs: Grid.propTypes.xs,
};

const guttersPropTypes = {
  xs: Grid.propTypes.xs,
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  gutters: PropTypes.shape(guttersPropTypes).isRequired,
  content: PropTypes.shape(contentPropTypes),
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
