import React from 'react';

import propTypes from './propTypes';

const Root = ({ classes }) => (/* eslint-disable */
  <g>
    <title>Logotipo da Livip</title>
    <description>Um desenho que forma a palavra Livip escrita em branco, com L maiúsculo e um círculo vermelho ao fim</description>
    <text className={classes.logo}>
      <tspan x="0" y="23">Livip</tspan>
    </text>
    <path className={classes.dot} d="M64.02 16.959c-1.549-.005-2.794 1.237-2.797 2.796.002 1.514 1.26 2.763 2.778 2.76 1.547-.005 2.77-1.238 2.78-2.783.01-1.54-1.262-2.768-2.76-2.773" />
  </g>
);

Root.propTypes = propTypes;

export default Root;
