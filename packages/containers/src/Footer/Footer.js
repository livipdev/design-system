import React from 'react';
import PropTypes from 'prop-types';

import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';
import Box from '@livipdev/core/Box';
import Hidden from '@livipdev/core/Hidden';
import Divider from '@livipdev/core/Divider';
import SocialIcons from '@livipdev/core/SocialIcons';
import FooterLogo from '@livipdev/core/FooterLogo';
import FooterLinks from '@livipdev/core/FooterLinks';
import FooterContact from '@livipdev/core/FooterContact';
import FooterNewsletter from '@livipdev/core/FooterNewsletter';
import FooterChat from '@livipdev/core/FooterChat';
import FooterAddress from '@livipdev/core/FooterAddress';
import FooterSectiontitle from '@livipdev/core/FooterSectionTitle';

import messages from './messages';

const Footer = ({ classes, variant }) => (
  <Box className={classes.root} component="footer">
    <Container>
      <Box component={Grid} container pt={5} mb={3} textAlign={{ xs: 'center', md: 'left' }}>
        <Grid item xs={12} md={3}>
          <Box component={FooterLogo} variant={variant} mb={3} />
          <Hidden smDown>
            <Box ml={-1}>
              <SocialIcons />
            </Box>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={3}>
          <Hidden smDown>
            <FooterLinks />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Box mb={3}>
                <FooterContact />
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item md={6}>
                <FooterChat />
              </Grid>
            </Hidden>
          </Grid>
          <Box component={Grid} container justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Grid col xs={10} lg={10}>
              <FooterNewsletter />
            </Grid>
          </Box>
          <Box mt={3} component="div">
            <Hidden mdUp>
              <FooterSectiontitle message={messages.socialNetworks} />
              <SocialIcons />
            </Hidden>
          </Box>
        </Grid>
      </Box>
    </Container>
    <Divider className={classes.divider} />
    <Container>
      <Box
        component={Grid}
        className={classes.addressBar}
        container
        justify="space-between"
        alignItems="center"
        py={5}
      >
        <Grid item>
          <FooterAddress />
        </Grid>
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    divider: PropTypes.string,
  }),
  variant: PropTypes.string,
};

export default Footer;
