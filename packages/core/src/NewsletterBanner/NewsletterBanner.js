import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';
import Typography from '@livipdev/core/Typography';

import messages from './messages';
import NewsletterForm from '../NewsletterForm';

const NewsletterBanner = ({ classes, onSubmit, width }) => {
  const variant = width === 'xs' ? 'body2' : 'h3';

  return (
    <Box className={classes.wrapper}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item flex={1} md={5}>
          <Typography
            message={messages.title}
            variant={variant}
            className={classes.typography}
          />
        </Grid>
        <Grid item md={6}>
          <NewsletterForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
};

NewsletterBanner.propTypes = {
  classes: PropTypes.shape({
    typography: PropTypes.string,
    wrapper: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default NewsletterBanner;
