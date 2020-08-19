import { defineMessages } from 'react-intl';

export const scope = 'app.components.ProjectCard';

export default defineMessages({
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'para {company}',
  },

  button: {
    id: `${scope}.button`,
    defaultMessage: 'Ver programa',
  },
});
