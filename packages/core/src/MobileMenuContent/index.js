import React from 'react';

import Grid from '../Grid';
import MainMenu from '../MainMenu';
import SubMenu from '../SubMenu';

import propTypes from './propTypes';

# TODO: IN-OUT ANIMATION
# CAN USE THE Slide COMPONENT:https://material-ui.com/components/transitions/#slide
# I'VE TRIED TO DO THAT, BUT GOT NODE IS NULL ERROR
# CAN CHECK THIS REF: https://stackoverflow.com/questions/55647969/how-to-get-one-elements-to-slide-in-while-the-other-slides-out-using-react-and
const MobileMenuContent = ({ currentMenu, variant }) => (
  <Grid item>
    <MainMenu variant={variant} />
    <SubMenu variant={variant} />
  </Grid>
);

MobileMenuContent.propTypes = propTypes;

export default MobileMenuContent;
