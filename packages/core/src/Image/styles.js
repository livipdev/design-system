import { buildImagePath } from './builders';

const styles = (theme) => ({
  img: {
    backgroundImage: (props) => `url(${buildImagePath(props.rootImage)})`,

    [theme.breakpoints.up('sm')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, 'sm')})`,
    },

    [theme.breakpoints.up('md')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, 'md')})`,
    },

    [theme.breakpoints.up('lg')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, 'lg')})`,
    },

    [theme.breakpoints.up('xl')]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, 'xl')})`,
    },
  },
});

export default styles;
