import React from 'react';
import { useIntl } from 'react-intl';

import Grid from '../Grid';
import Button from '../Button';

import messages from './messages';
import propTypes from './propTypes';

const MainMenuButtons = ({ xs, alignItems, justify }) => {
  const intl = useIntl();

  return (
      <Grid xs={xs} alignItems={alignItems} justify={justify} container>
        <Button variant="text" color="secondary">
          { intl.formatMessage(messages.proposal) }
        </Button>
    </Grid>
  );
};

MainMenuButtons.propTypes = propTypes;

export default MainMenuButtons;
