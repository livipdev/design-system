import React from 'react';
import { useIntl } from 'react-intl';

import Grid from '../Grid';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const MainMenuList = ({ variant, xs, items, hashmap, justify, alignItems }) => {
  const intl = useIntl();

  return (
    <Grid xs={xs} alignItems={alignItems} justify={justify} container>
      { buildMenuItems(variant, intl, items, hashmap) }
    </Grid>
  );
};

MainMenuList.propTypes = propTypes;

export default MainMenuList;
