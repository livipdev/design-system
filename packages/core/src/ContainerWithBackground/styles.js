import { buildImagePath } from '../Image/builders';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spaces.loose.value,
  },

  bg: {
    backgroundImage: (props) => `url(${buildImagePath(props.background)})`,

    [theme.breakpoints.up('sm')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'sm')})`,
    },

    [theme.breakpoints.up('md')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'md')})`,
    },

    [theme.breakpoints.up('lg')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'lg')})`,
    },

    [theme.breakpoints.up('xl')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'xl')})`,
    },
  },

  highlight: {
    ...theme.backgrounds.highlight.background,
    ...theme.backgrounds.highlight.alignment.default,
    ...theme.sizes.almostFullScreen,
    ...theme.alignments.center,

    [theme.breakpoints.down('md')]: {
      ...theme.backgrounds.highlight.alignment.mobile,
    },
  },
});

export default styles;
