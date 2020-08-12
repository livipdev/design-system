import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../Typography';

import messages from './messages';

/* eslint-disable jsx-a11y/anchor-is-valid */
const FooterLinks = ({ classes }) => (
  <>
    <a nohref className={classes.link}>
      <Typography message={messages.aboutUs} />
    </a>
    <a nohref className={classes.link}>
      <Typography message={messages.theSportraveller} />
    </a>
    <a nohref className={classes.link}>
      <Typography message={messages.partnersAndClients} />
    </a>
    <a nohref className={classes.link}>
      <Typography message={messages.frequentlyAskedQuestions} />
    </a>
    <a nohref className={classes.link}>
      <Typography message={messages.privacyPolicy} />
    </a>
    <a nohref className={classes.link}>
      <Typography message={messages.termsAndConditions} />
    </a>
  </>
);

FooterLinks.propTypes = {
  classes: PropTypes.shape({
    link: PropTypes.string,
  }),
};

export default FooterLinks;
