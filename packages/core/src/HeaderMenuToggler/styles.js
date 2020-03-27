const styles = (theme) => ({
  root: {
    mixBlendMode: 'difference',
    color: theme.palette.common.white,
    position: 'absolute',
    top: '20px',
    left: '20px',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default styles;
