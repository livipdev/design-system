import React from 'react';

import Box from '../Box';
import IntlButton from '../IntlButton';

import messages from './messages';
import propTypes from './propTypes';

const MainMenuButtons = ({ classes, isExiting }) => {
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
      <IntlButton
        variant="outlined"
        message={messages.livipClub}
      />
      <IntlButton
        variant="contained"
        color="secondary"
        message={messages.referral}
      />
    </Box>
  );
};

MainMenuButtons.propTypes = propTypes;

export default MainMenuButtons;
