import React from 'react';
import { useIntl } from 'react-intl';

import Grid from '../Grid';
import Button from '../Button';

import messages from './messages';

const MainMenuButtons = ({ classes }) => {
  const intl = useIntl();

  return (
    <Grid item classes={classes}>
      <Button variant="outlined">
        { intl.formatMessage(messages.livipClub) }
      </Button>
      <Button variant="contained" color="secondary">
        { intl.formatMessage(messages.referral) }
      </Button>
    </Grid>
  );
};

export default MainMenuButtons;
