const styles = (theme) => ({
  card: {
    cursor: 'auto',
    border: `1px solid ${theme.palette.grey['300']}`,
    borderRadius: 4,
    boxShadow: 'none',
    width: '100%',
    marginLeft: ({ gutterX }) => `${gutterX}vw`,
    marginRight: ({ gutterX }) => `${gutterX}vw`,
  },

  media: {
    ...theme.sizes.proportions["4:3"],
  },

  content: {
    padding: '36px 26px',

    '&:last-child': {
      paddingBottom: 36,
    },
  },

  title: {
    fontSize: '1.4rem',
  },

  description: {
    fontStyle: ({ italicDescription }) => italicDescription ? 'italic' : 'none',
    color: theme.palette.grey[500],
    fontSize: '0.9rem',
  },
});

export default styles;
