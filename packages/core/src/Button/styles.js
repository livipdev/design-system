import {
  getDoubledSpace,
  getHalfSpace,
} from '../styles/spacing';

const addAnimation = (theme) => ({
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    background: theme.palette.common.white,
    content: '""',
    height: '155px',
    left: '-75px',
    opacity: 0.2,
    position: 'absolute',
    top: '-50px',
    transform: 'rotate(35deg)',
    transition: 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
    width: '50px',
    zIndex: 1,
  },
  '&:hover': {
    '&::after': {
      left: '120%',
      transition: 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
});

const styles = (theme) => ({
  root: {
    ...addAnimation(theme),
    margin: getHalfSpace(),
    paddingTop: getHalfSpace(),
    paddingBottom: getHalfSpace(),
    paddingLeft: getDoubledSpace(),
    paddingRight: getDoubledSpace(),
  },

  outlined: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },

  textSecondary: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
});

export default styles;
