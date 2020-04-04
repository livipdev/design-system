const styles = (theme) => ({
  '@global': {
    body: {
      [theme.breakpoints.down('md')]: {
        ...theme.sizes.hideHorizontalScroll,
      },
    },
  },
});

export default styles;
