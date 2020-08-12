import { defineMessages } from 'react-intl';

export const scope = 'app.components.NewsletterForm';

export default defineMessages({
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },

  label: {
    id: `${scope}.label`,
    defaultMessage: 'Type your email',
  },
});
