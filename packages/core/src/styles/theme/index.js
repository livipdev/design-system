import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { elevations, palette, shape, typography } from '@livip/tokens';

export const theme = {
  elevations,
  palette,
  shape,
  typography,
};

export default createMuiTheme(theme);
