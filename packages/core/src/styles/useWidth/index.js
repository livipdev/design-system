import useTheme from '../useTheme';
import useMediaQuery from '../../useMediaQuery';
import { SCREEN_SIZES } from '../theme/constants';

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || SCREEN_SIZES.EXTRA_SMALL
  );
}

export default useWidth;
