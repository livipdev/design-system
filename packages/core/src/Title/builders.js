import React from 'react';

import Typography from '../Typography';

export const buildText = (content, props) => (
  typeof content.message === 'object'
    ? buildIntlText(content, props)
    : buildRawText(content, props)
);

const buildIntlText = (content, props) => (
  <Typography
    variant={content.variant}
    message={content.message}
    {...props}
  />
);

const buildRawText = (content, props) => (
  <Typography
    variant={content.variant}
    children={content.message}
    {...props}
  />
);
