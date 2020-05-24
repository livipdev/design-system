import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { selectVariant } from './selectors';
import SvgIcon from '../SvgIcon';

const Logotype = ({ classes, variant, viewBox, width }) => {
  const Variant = selectVariant(variant);

  return (
    <SvgIcon className={classes.root} viewBox={viewBox} width={width}>
      <Variant classes={classes} variant={variant} />
    </SvgIcon>
  );
};

Logotype.propTypes = propTypes;
Logotype.defaultProps = defaultProps;

export default Logotype;
