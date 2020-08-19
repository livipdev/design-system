import { defineMessages } from 'react-intl';

export const scope = 'app.components.NewsletterForm';

export default defineMessages({
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Assinar nossa Newsletter',
  },

  label: {
    id: `${scope}.label`,
    defaultMessage: 'Digite aqui seu email',
  },
});
