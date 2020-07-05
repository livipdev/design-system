import styled from '../styles/styled';

import propTypes from './propTypes';

const Container = styled('div')(({
  disableGutters,
  theme
}) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: disableGutters ? false : {
    margin: '0 auto',
    maxWidth: '86vw',
  }
}));

Container.propTypes = {
  ...propTypes,
};

export default Container;
