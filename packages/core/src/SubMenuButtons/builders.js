import React from 'react';

import IntlButton from '../IntlButton';

import messages from './messages';
import { SUBMENU_BUTTONS } from './constants';

export const buildVariantButtons = (variant) => {
  const options = {
    ...SUBMENU_BUTTONS[variant],
    variant,
  };
  const buttons = options.order.map((key) => buildKeyButton(key, options));

  return buttons;
};

const buildKeyButton = (key, { variant, intl, ...options }) => {
  const button = options.hashmap[key];
  const message = messages[variant][key];

  return (
    <IntlButton
      key={key}
      variant={button.variant}
      color={button.color}
      message={message}
    />
  );
};
