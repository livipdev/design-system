const styles = (theme) => ({
  root: {
    ...theme.sizes.fullwidth,
    ...theme.visibilities.overflowHidden,

    paddingTop: theme.spaces.loose.value,
  },

  tile: {
    ...theme.cards.tile.default,

    '&:hover': {
      ...theme.cards.tile.hover,
    },
  },
});

export default styles;
