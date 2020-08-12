export default function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },

    divider: {
      backgroundColor: 'rgba(255, 255, 255, .1)',
    },

    addressBar: {
      padding: '8px 0',
    },
  };
}
