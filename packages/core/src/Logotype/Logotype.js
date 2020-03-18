import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { selectVariant } from './selectors';
import SvgIcon from '../SvgIcon';

const Logotype = ({ classes, variant, viewBox }) => {
  const Variant = selectVariant(variant);

  return (
    <SvgIcon className={classes.root} viewBox={viewBox}>
      <Variant classes={classes} variant={variant} />
    </SvgIcon>
  );
};

Logotype.propTypes = propTypes;
Logotype.defaultProps = defaultProps;

export default Logotype;
