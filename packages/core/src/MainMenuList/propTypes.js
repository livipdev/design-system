import PropTypes from 'prop-types';

import Grid from '../Grid';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  xs: Grid.propTypes.xs.isRequired,
  items: PropTypes.array.isRequired,
  hashmap: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
