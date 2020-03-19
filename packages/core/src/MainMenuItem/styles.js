const styles = (theme) => ({
  root: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    '&::after': {
      content: '""',
      display: 'block',
      height: '2px',
      backgroundColor: theme.palette.common.white,
      transition: 'width .3s',
    },
    '&:hover': {
      '&::after': {
        width: '100%',
      },
    },
  },

  selected: {
    '&::after': {
      width: '100%',
    },
  },

  unselected: {
    '&::after': {
      width: '0%',
    },
  },
});

export default styles;
