import React, { Fragment } from 'react'
import { buildSocialIcons } from './builders';

const SocialIcons = ({ classes }) => (
  <Fragment>
    { buildSocialIcons(classes.icon) }
  </Fragment>
);

export default SocialIcons;
