import React from 'react';
import startCase from 'lodash/startCase';

import Box from '../Box';
import Typography from '../Typography';

import propTypes from './propTypes';

const EventCardCategories = props => (
  <Box className={props.classes.box}>
    {
      props.categories.map(category => (
        <Typography key={category} className={props.classes.tag}>
          {startCase(category)}
        </Typography>
      ))
    }
  </Box>
);

EventCardCategories.propTypes = propTypes;

export default EventCardCategories;
