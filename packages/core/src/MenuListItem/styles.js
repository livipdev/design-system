const styles = (theme) => ({
  root: {
    ...theme.alignments.horizontalList,

    '&::after': {
      ...theme.pseudos.empty,
      ...theme.transitions.width,
      ...theme.shapes.underline.menu,
      ...theme.sizes.noWidth,

      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create('width'),
    },
    '&:hover': {
      '&::after': {
        ...theme.sizes.fullwidth,
      },
    },
    '&$selected': {
      backgroundColor: theme.palette.common.transparent,
      '&:hover': {
        backgroundColor: theme.palette.common.transparent,
      },
    },
  },

  selected: {
    '&::after': {
      ...theme.sizes.fullwidth,
    },
  },
});

export default styles;
