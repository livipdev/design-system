import PropTypes from 'prop-types';

import { materialBreakpoints } from './breakpoints';
import { variantTypes } from '../../Typography';

export const WidthPropTypes = {
  all: PropTypes.oneOf(materialBreakpoints.keys),
};

const PalettePropTypes = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  dark: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

const GreyPalettePropTypes = PropTypes.shape({
  highEmphasis: PropTypes.string,
  mediumEmphasis: PropTypes.string,
  disabled: PropTypes.string,
  lighter: PropTypes.string,
  background: PropTypes.string,
});

const CustomPalettePropTypes = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

const ThemePropTypes = PropTypes.shape({
  palette: PropTypes.shape({
    primary: PalettePropTypes,
    secondary: PalettePropTypes,
    grey: GreyPalettePropTypes,
    error: CustomPalettePropTypes,
    success: CustomPalettePropTypes,
    attention: CustomPalettePropTypes,
    common: PropTypes.shape({
      white: PropTypes.string,
      black: PropTypes.string,
      transparent: PropTypes.string,
    }),
  }),
});

export const VariantPropTypes = PropTypes.oneOf(Object.values(variantTypes));

export const ColorPropTypes = {
  all: PropTypes.oneOf(['primary', 'secondary', 'inherit', 'default']),
  theme: PropTypes.oneOf(['primary', 'secondary']),
};

export const TypographyColorPropTypes = {
  all: PropTypes.oneOf(['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),
};

export default ThemePropTypes;
