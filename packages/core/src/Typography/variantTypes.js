import { css } from '@material-ui/core/styles';

import { fontSize } from '@livip/tokens';

const variantTypes = {
  display: 'display',
  headline: 'headline',
  title: 'title',
  subheading: 'subheading',
  body: 'body',
  button: 'button',
  caption: 'caption',
};

const variantTypeStyles = ({ bold }) => ({
  display: css`
    font-size: ${fontSize.display};
    font-weight: 400;
    line-height: 40px;
  `,
  headline: css`
    font-size: ${fontSize.headline};
    font-weight: ${bold ? 700 : 400};
    line-height: 32px;
  `,
  title: css`
    font-size: ${fontSize.title};
    font-weight: 500;
    line-height: 24px;
  `,
  subheading: css`
    font-size: ${fontSize.subheading};
    font-weight: ${bold ? 700 : 400};
    line-height: 24px;
  `,
  body: css`
    font-size: ${fontSize.body};
    font-weight: ${bold ? 700 : 400};
    line-height: 20px;
  `,
  button: css`
    font-size: ${fontSize.button};
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
  `,
  caption: css`
    font-size: ${fontSize.caption};
    font-weight: 400;
    line-height: 16px;
  `,
});

export {
  variantTypes,
  variantTypeStyles,
};

export default variantTypes;
