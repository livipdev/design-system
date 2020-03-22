import { getHalfSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    display: 'inline-block',
    width: 'auto',
    margin: getHalfSpace(),
    '&::after': {
      content: '""',
      display: 'block',
      height: '2px',
      backgroundColor: theme.palette.common.white,
      transition: 'width .3s',
      width: '0%',
    },
    '&:hover': {
      '&::after': {
        width: '100%',
      },
    },
    '&$selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },

  selected: {
    '&::after': {
      width: '100%',
    },
  },
});

export default styles;
