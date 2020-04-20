import React from 'react';

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
    </Container>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
