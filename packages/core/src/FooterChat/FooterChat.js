import React from 'react';

import Box from '../Box';
import Typography from '../Typography';

import messages from './messages';

const FooterChat = () => (
  <Box display="flex" alignItems="center">
    <Box mr={2}>
      <Typography variant="body2" message={messages.title} />
      <Typography variant="body1" message={messages.subtitle} />
    </Box>
    <img src="/icons/icon-question.png" alt="Chat" role="presentation" />
  </Box>
);

export default FooterChat;
