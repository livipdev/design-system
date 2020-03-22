import React from 'react';
import { useIntl } from 'react-intl';

import Container from '../Container';
import Box from '../Box';
import Logotype from '../Logotype';
import MenuList from '../MenuList';
import Button from '../Button';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { buildMenuItems } from './builders';
import messages from './messages';

const MainMenu = ({ classes, maxWidth, variant }) => {
  const intl = useIntl();

  return (
    <Container className={classes.container} maxWidth={maxWidth} disableGutters>
      <Box className={classes.box}>
        <Box className={classes.logoBox}>
          <Logotype variant={variant} />
        </Box>
        <Box className={classes.menuBox}>
          <MenuList>
            { buildMenuItems(variant, intl) }
          </MenuList>
        </Box>
        <Box className={classes.box}>
          <Button variant="outlined">
            { intl.formatMessage(messages.buttons.livipClub) }
          </Button>
          <Button color="secondary">
            { intl.formatMessage(messages.buttons.referral) }
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
