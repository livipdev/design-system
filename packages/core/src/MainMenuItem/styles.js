const styles = (theme) => ({
  root: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    '&::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: '2px',
      backgroundColor: theme.palette.common.white,
      transition: 'width .3s',
    },
    '&:hover': {
      '&::after': {
        width: '100%',
      }
    },
  },
});

export default styles;
