import PropTypes from 'prop-types';

import Grid from '../Grid';

const menuPropTypes = {
  order: PropTypes.array.isRequired,
  hashmap: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  current: PropTypes.string,
};

const propTypes = {
  menu: PropTypes.shape(menuPropTypes).isRequired,
  xs: Grid.propTypes.xs,
  justify: Grid.propTypes.justify,
  alignItems: Grid.propTypes.alignItems,
};

export default propTypes;
