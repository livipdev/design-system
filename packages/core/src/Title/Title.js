import React from 'react';

import Box from '../Box';
import Container from '../Container';

import { buildText } from './builders';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Title = ({
  classes,
  maxWidth,
  title,
  subtitle,
  suptitle,
  customClass,
  children,
  ...props
}) => {
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      customClass,
    ].join(' '),
  };

  return (
    <Container classes={mergedClasses} maxWidth={maxWidth}>
      { buildText(suptitle, props) }
      { buildText(title, props) }
      { buildText(subtitle, props) }
      { children && (
        <Box mt={6}>
          {children}
        </Box>
      ) }
    </Container>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
