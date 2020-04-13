import {
  ID,
  WHATSAPP_HREF,
  WHATSAPP_DATA_ACTION,
  EMAIL_HREF,
  TWITTER_HREF,
} from './constants';

export const buildShareLinks = (event) => ({
  whatsapp: buildWhatsappLink(event),
  email: buildEmailLink(event),
  facebook: buildFacebookLink(event),
  twitter: buildTwitterLink(event),
});

const buildWhatsappLink = (event) => ({
  href: formatHref(WHATSAPP_HREF, event),
  dataAction: WHATSAPP_DATA_ACTION,
});

const buildEmailLink = (event) => ({
  href: formatHref(EMAIL_HREF, event),
});

const buildFacebookLink = (event) => ({
  href: '#',
});

const buildTwitterLink = (event) => ({
  href: formatHref(TWITTER_HREF, event),
});

const formatHref = (href, event) => href.replace(ID, event.id);
