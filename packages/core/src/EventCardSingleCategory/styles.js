const styles = (theme) => ({
  root: {
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },

    '&::after': {
      content: '", "',
    },

    '&:last-child': {
      '&::after': {
        content: '""',
      },
    },
  },
});

export default styles;
