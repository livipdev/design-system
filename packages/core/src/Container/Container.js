import React from 'react';
import MuiContainer from '@material-ui/core/Container';

import propTypes from './propTypes';

const Container = (props) =>  <MuiContainer {...props} />;

Container.propTypes = {
  ...MuiContainer.propTypes,
  ...propTypes,
};

export default Container;
