import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import Link from '../Link';

import messages from './messages';
import { SUBMENU_BUTTONS } from './constants';

export const buildVariantButtons = (variant) => {
  const options = {
    ...SUBMENU_BUTTONS[variant],
    variant,
  };
  const buttons = (
    options.order
      ? options.order.map((key) => buildKeyButton(key, options))
      : <Fragment />
  );

  return buttons;
};

const buildKeyButton = (key, { variant }) => {
  const message = messages[variant][key];

  return (
    <Link
      key={key}
    >
      <FormattedMessage {...message} />
    </Link>
  );
};
