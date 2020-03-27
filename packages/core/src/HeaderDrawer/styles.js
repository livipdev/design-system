import { getDoubledSpace } from '../styles/spacing';

const styles = (theme) => ({
  paper: {
    background: theme.palette.primary.main,
    padding: getDoubledSpace(),
    justifyContent: 'center',
    minWidth: '50vw',

    [theme.breakpoints.down('xs')]: {
      minWidth: '100vw',
    },
  },
});

export default styles;
