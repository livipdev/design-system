import React from 'react';

import SocialIcon from '../SocialIcon';

import { SOCIAL_NETWORKS, SOCIAL_NETWORKS_ORDERED } from './constants';

export const buildSocialIcons = (items = SOCIAL_NETWORKS_ORDERED) => items.map(buildSocialIcon);

const buildSocialIcon = (key) => {
  const { href, Icon } = SOCIAL_NETWORKS[key];

  return <SocialIcon key={key} href={href} Icon={Icon} />
};
