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
      width: ({ gutterX }) => `${100 - (2 * gutterX || 0)}%`,

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
      fontSize: ({ parentColumns }) => parentColumns < 3 ? '3.5rem' : '2rem',
      fontWeight: 'bold',
    },

    subtitle: {
      fontWeight: 300,
      marginBottom: '2rem',
    },

    tag: {
      position: 'absolute',
      top: `${theme.spacing(3)}px`,
      left: `${theme.spacing(3)}px`,
      backgroundColor: theme.palette.primary.main,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      borderRadius: '4px',
      fontSize: ({ parentColumns }) => parentColumns < 3 ? '.875rem' : '.7rem',
      fontWeight: 300,
      display: ({ hideDate }) => hideDate ? 'none' : 'flex',

      '& span': {
        padding: '2px 0 0 7px',
      },

      '& svg': {
        fontSize: ({ parentColumns }) => parentColumns < 3 ? '1.5rem' : '1.1rem',
      },
    },
  };
}
