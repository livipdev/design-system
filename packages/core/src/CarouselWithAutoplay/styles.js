import { BULLET_SIZE} from './constants';

const styles = (theme) => ({
  carousel: {
    '& .awssld__bullets': {
      bottom: theme.spaces.looseX2.value,
      zIndex: theme.zIndex.mobileStepper - 1,

      '&> button': {
        backgroundColor: theme.palette.common.white,
        marginLeft: theme.spaces.default.value,
        marginRight: theme.spaces.default.value,
        width: BULLET_SIZE,
        height: BULLET_SIZE,
      },

      '&> .awssld__bullets--active': {
        transform: 'none',

        '&::after': {
          ...theme.pseudos.empty,
          ...theme.shapes.circle,

          borderColor: theme.palette.common.white,
          width: BULLET_SIZE + 12,
          height: BULLET_SIZE + 12,
          position: 'absolute',
          borderWidth: '2px',
          bottom: '-1px',
          marginLeft: '-6px',
          display: 'block',
        },
      },
    },
  },
});

export default styles;
