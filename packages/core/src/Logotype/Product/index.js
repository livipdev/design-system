import React from 'react';
import capitalize from 'lodash/capitalize';

import propTypes from './propTypes';
import Root from '../Root';

const Product = ({ classes, variant }) => (/* eslint-disable */
  <g>
    <Root classes={classes} />
    <title>
      Subdivisão { variant }
    </title>
    <description>
      A palavra { variant } escrita capitalizada e acinzentada, ao lado do logotipo da Livip, um pouco desalinhado para baixo
    </description>
    <text className={classes.productName}>
      <tspan x="69" y="23">{ capitalize(variant) }</tspan>
    </text>
  </g>
);

Product.propTypes = propTypes;

export default Product;
