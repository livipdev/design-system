import { defineMessages } from 'react-intl';

const scope = 'app.components.FooterLinks';

export default defineMessages({
  aboutUs: {
    id: `${scope}.aboutUs`,
    defaultMessage: 'Quem somos',
  },
  theSportraveller: {
    id: `${scope}.theSportraveller`,
    defaultMessage: 'Blog The Sportraveller',
  },
  partnersAndClients: {
    id: `${scope}.partnersAndClients`,
    defaultMessage: 'Parceiros e Clientes',
  },
  frequentlyAskedQuestions: {
    id: `${scope}.frequentlyAskedQuestions`,
    defaultMessage: 'Dúvidas Frequentes',
  },
  privacyPolicy: {
    id: `${scope}.privacyPolicy`,
    defaultMessage: 'Política de Privacidade',
  },
  termsAndConditions: {
    id: `${scope}.termsAndConditions`,
    defaultMessage: 'Termos e Condições',
  },
});
