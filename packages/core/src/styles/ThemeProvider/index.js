import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';

import ThemeProviderPropTypes from '../Theme/proptypes';

const ThemeProvider = ({ theme, muiProps, children }) => (
  <MuiThemeProvider theme={theme} {...muiProps}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: ThemeProviderPropTypes.isRequired,
  muiProps: PropTypes.shape({
    disableStylesGeneration: PropTypes.bool,
    sheetsManager: PropTypes.object,
  }),
};

ThemeProvider.defaultProps = {
  muiProps: {},
};

export default ThemeProvider;
