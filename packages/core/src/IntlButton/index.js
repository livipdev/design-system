import React from 'react';
import { useIntl } from 'react-intl';

import Button from '../Button';

import propTypes from './propTypes';

const IntlButton = ({ message, ...props }) => {
  const intl = useIntl();

  return (
    <Button {...props}>
      { intl.formatMessage(message) }
    </Button>
  );
};

IntlButton.propTypes = propTypes;

export default IntlButton;
