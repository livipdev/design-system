import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../Typography';

const FooterSectiontitle = ({ classes, ...props }) => (
  <Typography {...props} variant="body2" className={classes.title} />
);

FooterSectiontitle.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default FooterSectiontitle;
