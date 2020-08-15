import React from 'react';

import Link from '../Link';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ classes, variant }) => (
  <Link href='/' classes={classes}>
    <Logotype variant={variant} />
  </Link>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
