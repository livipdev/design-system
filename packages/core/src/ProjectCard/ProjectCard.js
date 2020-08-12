import React from 'react';
import { FormattedMessage } from 'react-intl';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';

import messages from './messages';
import propTypes from './propTypes';

const ProjectCard = ({ classes, title, date }) => (
  <Box className={classes.wrapper}>
    {
      date && (
        <Box className={classes.tag}>
          <CalendarTodayIcon />
          <span>
            { date }
          </span>
        </Box>
      )
    }
    <Typography className={classes.title} variant="h3" color="commmon.white">
      {title}
    </Typography>
    <Button variant="outlined">
      <FormattedMessage {...messages.button} />
    </Button>
  </Box>
);

ProjectCard.propTypes = propTypes;

export default ProjectCard;
