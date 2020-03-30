import { TRAVEL_HOME_HIGHLIGHT } from './constants';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spaces.loose.value,
  },

  [TRAVEL_HOME_HIGHLIGHT]: {
    backgroundColor: 'black',
  },
});

export default styles;
