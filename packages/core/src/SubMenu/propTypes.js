import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const childrenPropTypes = {
  menu: PropTypes.shape(itemPropTypes),
  buttons: PropTypes.shape(itemPropTypes),
};

const itemPropTypes = {
  xs: Grid.propTypes.xs,
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

const guttersPropTypes = {
  xs: Grid.propTypes.xs,
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  gutters: PropTypes.shape(guttersPropTypes).isRequired,
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
  children: PropTypes.shape(childrenPropTypes),
};

export default propTypes;
