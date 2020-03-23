import React from 'react';
import { useIntl } from 'react-intl';

import Grid from '../Grid';
import Typography from '../Typography';

import propTypes from './propTypes';
import messages from './messages';

const TopMenuClaim = ({ classes, variant, xs, justify, alignItems }) => {
  const intl = useIntl();
  const message = messages[variant];

  return (
    <Grid classes={classes} xs={xs} justify={justify} alignItems={alignItems} container>
      <Typography className={classes.typography}>
        {intl.formatMessage(message).concat(' ')}
      </Typography>
      <Typography variant="body2" className={classes.typography}>
        {intl.formatMessage(messages.contact)}
      </Typography>
    </Grid>
  );
};

TopMenuClaim.propTypes = propTypes;

export default TopMenuClaim;
