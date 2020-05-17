import React from 'react';
import WhatsAppIcon from '@livipdev/icons/WhatsApp';
import MailOutlineIcon from '@livipdev/icons/MailOutline';
import FacebookIcon from '@livipdev/icons/Facebook';
import TwitterIcon from '@livipdev/icons/Twitter';

import Grid from '../Grid';
import IconWithLink from '../IconWithLink';

import { buildShareLinks } from './builders';
import propTypes from './propTypes';

const EventCardShare = ({ classes, event }) => {
  const {
    whatsapp,
    email,
    facebook,
    twitter,
  } = buildShareLinks(event);

  return (
    <Grid className={classes.grid} item>
      <IconWithLink
        Icon={WhatsAppIcon}
        className={classes.whatsapp}
        {...whatsapp}
      />
      <IconWithLink
        Icon={MailOutlineIcon}
        className={classes.email}
        {...email}
      />
      <IconWithLink
        Icon={FacebookIcon}
        className={classes.facebook}
        {...facebook}
      />
      <IconWithLink
        Icon={TwitterIcon}
        className={classes.twitter}
        {...twitter}
      />
    </Grid>
  );
};

EventCardShare.propTypes = propTypes;

export default EventCardShare;
