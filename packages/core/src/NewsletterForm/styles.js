export default function (theme) {
  return {
    button: {
      fontWeight: 600,
      width: '20vw',
      padding: '15px 0',
      color: ({ inverse }) => inverse ? '#881c4c' : theme.palette.common.white,
      textTransform: ({ inverse }) => inverse ? 'none' : 'uppercase',
    },

    input: {
      width: theme.sizes.fullwidth.width,
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
