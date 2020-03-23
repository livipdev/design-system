import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const containerPropTypes = {
  xs: Grid.propTypes.xs,
};

const itemsPropTypes = {
  claim: PropTypes.shape(itemPropTypes),
  social: PropTypes.shape(itemPropTypes),
};

const itemPropTypes = {
  xs: Grid.propTypes.xs,
};

const guttersPropTypes = {
  xs: Grid.propTypes.xs,
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  gutters: PropTypes.shape(guttersPropTypes).isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  container: PropTypes.shape(containerPropTypes),
  items: PropTypes.shape(itemsPropTypes),
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
