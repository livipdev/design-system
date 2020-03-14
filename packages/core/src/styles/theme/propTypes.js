import PropTypes from 'prop-types';

const palettePropTypes = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  dark: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

const greyPalettePropTypes = PropTypes.shape({
  highEmphasis: PropTypes.string,
  mediumEmphasis: PropTypes.string,
  disabled: PropTypes.string,
  lighter: PropTypes.string,
  background: PropTypes.string,
});

const customPalettePropTypes = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

const propTypes = PropTypes.shape({
  palette: PropTypes.shape({
    primary: palettePropTypes,
    secondary: palettePropTypes,
    grey: greyPalettePropTypes,
    error: customPalettePropTypes,
    success: customPalettePropTypes,
    attention: customPalettePropTypes,
    common: PropTypes.shape({
      white: PropTypes.string,
      black: PropTypes.string,
      transparent: PropTypes.string,
    }),
  }),
});

export default propTypes;
