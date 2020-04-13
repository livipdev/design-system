const styles = (theme) => ({
  icon: {
    transition: theme.transitions.create('color'),

    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  },
});

export default styles;
