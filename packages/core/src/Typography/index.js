import React from 'react';
import MuiTypography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

import propTypes from './propTypes';

const Typography = ({ message, children, ...props }) => (
  <MuiTypography {...props}>
    {
      message
        ? <FormattedMessage {...message} />
        : children
    }
  </MuiTypography>
);

Typography.propTypes = {
  ...MuiTypography.propTypes,
  ...propTypes,
};

export default Typography;
