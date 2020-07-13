export default function (theme) {
  return {
    content: {
      padding: `${theme.spacing(6)}px`,
    },

    dialog: {
      overflow: 'initial',
    },

    header: {
      position: 'relative',
      color: theme.palette.common.white,
      backgroundImage: `linear-gradient(244deg, ${theme.palette.primary.main} 57%, ${theme.palette.secondary.main})`,
    },

    close: {
      position: 'absolute',
      right: '.5rem',
      top: '.5rem',
      cursor: 'pointer',
    },
  };
}
