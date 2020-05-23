import React from 'react';
import { useIntl } from 'react-intl';

import Box from '../Box';
import Typography from '../Typography';

import propTypes from './propTypes';
import messages from './messages';

const TopMenuClaim = ({ classes, variant }) => {
  const intl = useIntl();
  const message = messages[variant];

  return (
    <Box classes={classes}>
      <Typography>
        {intl.formatMessage(message).concat(' ')}
      </Typography>
      <Typography variant="body2" className={classes.contact}>
        {intl.formatMessage(messages.contact)}
      </Typography>
    </Box>
  );
};

TopMenuClaim.propTypes = propTypes;

export default TopMenuClaim;
