import React from 'react';
import MuiLink from '@material-ui/core/Link';

import defaultProps from './defaultProps';

const Link = (props) => <MuiLink {...props} />;

Link.propTypes = MuiLink.propTypes;
Link.defaultProps = {
  ...MuiLink.defaultProps,
  ...defaultProps,
};

export default Link;
