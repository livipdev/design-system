const styles = theme => ({
  root: {
    position: 'relative',

    '& .BrainhubCarousel__dot': {
      backgroundColor: ({ inverse }) => inverse ? theme.palette.primary.main : theme.palette.common.white,
      border: '1px solid tranparent',
      borderRadius: '50%',
      width: 10,
      height: 10,
      opacity: 1,
      padding: 0,
      marginLeft: 16,
      marginRight: 16,

      '&.BrainhubCarousel__dot--selected': {
        '&:after': {
          display: 'block',
          content: '""',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: ({ inverse }) => inverse ? theme.palette.primary.main : theme.palette.common.white,
          borderRadius: '50%',
          width: 22,
          height: 22,
          marginLeft: -6,
          position: 'absolute',
          top: -5.7,
        }
      },

      '&:before': {
        display: 'none',
      },
    },
  },
});

export default styles;
