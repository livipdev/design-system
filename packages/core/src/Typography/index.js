import React from 'react';
import MuiTypography from '@material-ui/core/Typography';
import { useIntl } from 'react-intl';

import propTypes from './propTypes';

const Typography = ({ message, children, ...props }) => {
  const intl = useIntl();

  return (
    <MuiTypography {...props}>
      {
        message
          ? intl.formatMessage(message)
          : children
      }
    </MuiTypography>
  );
};

Typography.propTypes = {
  ...MuiTypography.propTypes,
  ...propTypes,
};

export default Typography;
