import { fade } from '../styles/colorManipulator';

const styles = (theme) => ({
  card: {
    ...theme.cards.root.default,

    borderColor: theme.palette.grey.base,
    transition: theme.transitions.create(),

    '&::before': {
      ...theme.pseudos.empty,
      ...theme.shapes.arrowUp,
      ...theme.shapes.underline.card.arrow,
      ...theme.animations.card.shortSlideUp,

      borderLeftColor: theme.palette.common.transparent,
      borderRightColor: theme.palette.common.transparent,
      borderBottomColor: theme.palette.primary.main,
    },
    '&::after': {
      ...theme.pseudos.empty,
      ...theme.shapes.underline.card.line,
      ...theme.sizes.noWidth,

      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create('width'),
    },
    '&:hover': {
      '&::before': {
        animationName: '$slideUp',
      },
      '&::after': {
        ...theme.sizes.fullwidth,
      },
    },
  },

  media: {
    ...theme.sizes.proportions["4:3"],
  },

  '@keyframes slideUp': theme.keyframes.card.arrowSlideUp,
});

export default styles;
