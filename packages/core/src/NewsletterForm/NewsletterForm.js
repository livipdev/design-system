import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import TextField from '@livipdev/core/TextField';

import messages from './messages';

const NewsletterForm = ({ inverse, classes, onSubmit }) => {
  const [email, setEmail] = useState('');
  const intl = useIntl();

  const handleChange = (event) => setEmail(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <Box
      alignItems="center"
      component="form"
      display="flex"
      alignItems="flex-end"
      onSubmit={handleSubmit}
    >
      <TextField
        value={email}
        label={intl.formatMessage(messages.label)}
        type="email"
        onChange={handleChange}
        className={classes.input}
        required
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.button}
        size="small"
        color={inverse ? undefined : 'primary'}
      >
        {intl.formatMessage(messages.send)}
      </Button>
    </Box>
  );
};

NewsletterForm.propTypes = {
  inverse: false,
};

NewsletterForm.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
    input: PropTypes.string,
  }).isRequired,
  inverse: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default NewsletterForm;
