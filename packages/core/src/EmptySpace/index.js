import styled from '../styles/styled';

import propTypes from './propTypes';

const EmptySpace = styled('div')(({
  height
}) => ({
  height,
}));

EmptySpace.propTypes = {
  ...propTypes,
};

export default EmptySpace;
