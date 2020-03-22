const styles = (theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export default styles;
