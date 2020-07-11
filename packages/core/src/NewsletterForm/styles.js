export default function (theme) {
  return {
    button: {
      fontWeight: 600,
      width: '20vw',
    },

    input: {
      width: theme.sizes.fullwidth.width,
      marginRight: `${theme.spacing(2)}px`,
      '& .MuiInputLabel-root, & .MuiInputBase-root': {
        color: ({ inverse }) => inverse ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .MuiInput-underline:before, & .MuiInput-underline:after': {
        borderColor: ({ inverse }) => inverse ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderColor: ({ inverse }) => inverse ? theme.palette.common.white : theme.palette.primary.main,
      },
    },
  };
}
