import React from 'react';
import PropTypes from 'prop-types';

import FooterSectiontitle from '../FooterSectionTitle';
import messages from './messages';
import NewsletterForm from '../NewsletterForm';

const FooterNewsletter = ({ onSubmit }) => (
  <>
    <FooterSectiontitle message={messages.title} />
    <NewsletterForm onSubmit={onSubmit} inverse />
  </>
);

FooterNewsletter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FooterNewsletter;
