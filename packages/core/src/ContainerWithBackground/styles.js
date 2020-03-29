import dictionary from '@livip/styles';
import { TRAVEL_HOME_HIGHLIGHT } from './constants';

const styles = (theme) => ({
  root: {
    paddingTop: dictionary.spacing.loose.value,
  },

  [TRAVEL_HOME_HIGHLIGHT]: {
    backgroundColor: 'black',
  },
});

export default styles;
