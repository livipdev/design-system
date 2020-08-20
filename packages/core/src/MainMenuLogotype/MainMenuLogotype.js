import React from 'react';

import Link from '../Link';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ classes, variant, rootLogotype }) => (
  <Link href='https://pre-home.livip.vercel.app' classes={classes}>
    <Logotype variant={variant} rootLogotype={rootLogotype} />
  </Link>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
