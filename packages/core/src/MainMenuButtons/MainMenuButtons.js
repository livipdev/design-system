import React from 'react';
import { useIntl } from 'react-intl';

import Box from '../Box';
import Button from '../Button';

import messages from './messages';
import propTypes from './propTypes';

const MainMenuButtons = ({ classes }) => {
  const intl = useIntl();

  return (
    <Box classes={classes}>
      <Button variant="outlined">
        { intl.formatMessage(messages.livipClub) }
      </Button>
      <Button variant="contained" color="secondary">
        { intl.formatMessage(messages.referral) }
      </Button>
    </Box>
  );
};

MainMenuButtons.propTypes = propTypes;

export default MainMenuButtons;
