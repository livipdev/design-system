import { getDoubledSpace } from '../styles/spacing';

const styles = {
  root: {
    '&> button:first-child': {
      marginRight: getDoubledSpace(),
    },
  },
};

export default styles;
