import React from 'react';
import capitalize from 'lodash/capitalize';

import propTypes from './propTypes';
import Root from '../Root';

const Product = ({ classes, variant }) => (/* eslint-disable */
  <g>
    <text className={classes.productName}>
      <title>
        Subdivisão { variant }
      </title>
      <description>
        A palavra { variant } escrita capitalizada e acinzentada, ao lado do logotipo da Livip, um pouco desalinhado para baixo
      </description>
      <tspan x="73" y="22">{ capitalize(variant) }</tspan>
    </text>
    <Root />
  </g>
);

Product.propTypes = propTypes;

export default Product;
