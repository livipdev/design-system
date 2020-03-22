import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from '../Container';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TopMenu = ({ classes, maxWidth, variant }) => (
  <Container className={classes.container} maxWidth={maxWidth} disableGutters>
    <FormattedMessage id="test.ok" defaultMessage="NOK" />
  </Container>
);

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
