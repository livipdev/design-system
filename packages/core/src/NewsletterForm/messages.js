import { defineMessages } from 'react-intl';

export const scope = 'app.components.NewsletterForm';

export default defineMessages({
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Sign our Newsletter',
  },

  label: {
    id: `${scope}.label`,
    defaultMessage: 'Type your email',
  },
});
