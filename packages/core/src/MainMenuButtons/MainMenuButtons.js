import React from 'react';
import { useIntl } from 'react-intl';

import Box from '../Box';
import Button from '../Button';

import messages from './messages';
import propTypes from './propTypes';

const MainMenuButtons = ({ classes, isExiting }) => {
  const intl = useIntl();
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      isExiting
        ? classes.isExiting
        : classes.isNotExiting,
    ].join(" "),
  };

  return (
    <Box classes={mergedClasses}>
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
