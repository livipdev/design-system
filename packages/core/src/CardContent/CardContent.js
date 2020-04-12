import React from 'react';
import MuiCardContent from '@material-ui/core/CardContent';

import propTypes from './propTypes';

const CardContent = (props) => <MuiCardContent {...props} />;

CardContent.propTypes = {
  ...MuiCardContent.propTypes,
  ...propTypes,
};

export default CardContent;
