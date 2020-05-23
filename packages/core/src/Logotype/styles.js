const styles = (theme) => ({
  root: {
    height: ({ height }) => height || '1em',
    width: ({ width }) => width || 'unset',
  },

  logo: {
    ...theme.typography.logo.root,

    color: theme.palette.common.white,
  },

  dot: {
    ...theme.typography.logo.dot,

    color: theme.palette.primary.contrastText,
  },

  productName: {
    ...theme.typography.logo.product,

    color: theme.palette.common.white,
  },
});

export default styles;
