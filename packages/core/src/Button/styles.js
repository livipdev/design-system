const styles = (theme) => ({
  root: {
    paddingTop: theme.spaces.compact.value,
    paddingBottom: theme.spaces.compact.value,
    paddingLeft: theme.spaces.default.value,
    paddingRight: theme.spaces.default.value,
  },

  outlined: {
    ...theme.animations.outlinedButton.root,

    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,

    '&::after': {
      ...theme.pseudos.empty,
      ...theme.animations.outlinedButton.after,

      background: theme.palette.common.white,
    },

    '&:hover': {
      '&::after': {
        ...theme.animations.outlinedButton.hover,
      },
    },
  },

  outlinedPrimary: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },

  textSecondary: {
    color: theme.palette.common.white,
    padding: theme.spaces.compact.value,

    '&:hover': {
      backgroundColor: theme.palette.common.transparent,
    },
  },

  containedSecondary: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,

    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
});

export default styles;
