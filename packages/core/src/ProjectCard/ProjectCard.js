import React from 'react';
import { FormattedMessage } from 'react-intl';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Link from 'next/link'

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';
import Spacer from '@livipdev/core/Spacer';

import messages from './messages';
import propTypes from './propTypes';

const ProjectCard = ({ classes, title, subtitle, date, href }) => (
  <Link href={href}>
    <Box className={classes.wrapper}>
      <Spacer />
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
      <Typography className={classes.subtitle} variant="h4" color="commmon.white">
        {subtitle}
      </Typography>
      <Button variant="outlined">
        <FormattedMessage {...messages.button} />
      </Button>
    </Box>
  </Link>
);

ProjectCard.propTypes = propTypes;

export default ProjectCard;
