export default function (theme) {
  return {
    wrapper: {
      // look and feel
      borderRadius: '5px',
      color: theme.palette.common.white,
      height: ({ parentColumns }) => `${60/parentColumns}vw`,
      marginBottom: ({ gutterBottom }) => gutterBottom ? `${theme.spacing(3)}px` : '0',
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(8),

      // display properties
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',

      // background properties
      backgroundImage: ({ img }) => `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    },

    title: {
      textAlign: 'center',
      marginBottom: '2rem',
      fontSize: '3.5rem',
      fontWeight: 'bold',
    },

    tag: {
      position: 'absolute',
      top: `${theme.spacing(3)}px`,
      left: `${theme.spacing(3)}px`,
      backgroundColor: theme.palette.primary.main,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      borderRadius: '4px',
      fontSize: '.875rem',
      fontWeight: 300,
      display: 'flex',

      '& span': {
        padding: '2px 0 0 7px',
      },
    },
  };
}
