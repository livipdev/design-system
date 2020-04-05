import React from 'react';

import IconWithLink from '../IconWithLink';

import { SOCIAL_NETWORKS, SOCIAL_NETWORKS_ORDERED } from './constants';

export const buildSocialIcons = (className, items = SOCIAL_NETWORKS_ORDERED) => (
  items.map((item) => buildIconWithLink(item, className))
);

const buildIconWithLink = (key, className) => {
  const { href, Icon } = SOCIAL_NETWORKS[key];

  return (
    <IconWithLink
      key={key}
      className={className}
      href={href}
      Icon={Icon}
    />
  );
};
