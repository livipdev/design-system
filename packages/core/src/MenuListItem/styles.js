const styles = (theme) => ({
  root: {
    ...theme.alignments.horizontalList,

    '&::after': {
      ...theme.pseudos.empty,
      ...theme.transitions.width,
      ...theme.sizes.menuLine.shared,
      ...theme.sizes.menuLine.hidden,

      backgroundColor: theme.palette.common.white,
    },
    '&:hover': {
      '&::after': {
        ...theme.sizes.menuLine.visible,
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
      ...theme.sizes.menuLine.visible,
    },
  },
});

export default styles;
