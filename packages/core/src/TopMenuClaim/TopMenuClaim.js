import React from 'react';
import { useIntl } from 'react-intl';

import Grid from '../Grid';
import Typography from '../Typography';

import propTypes from './propTypes';
import messages from './messages';

const TopMenuClaim = ({ classes, variant }) => {
  const intl = useIntl();
  const message = messages[variant];

  return (
    <Grid item classes={classes}>
      <Typography>
        {intl.formatMessage(message).concat(' ')}
      </Typography>
      <Typography variant="body2">
        {intl.formatMessage(messages.contact)}
      </Typography>
    </Grid>
  );
};

TopMenuClaim.propTypes = propTypes;

export default TopMenuClaim;
