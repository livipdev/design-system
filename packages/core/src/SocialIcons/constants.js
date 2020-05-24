import LinkedInIcon from '@livipdev/icons/LinkedIn';
import InstagramIcon from '@livipdev/icons/Instagram';
import WhatsAppIcon from '@livipdev/icons/WhatsApp';

const LINKEDIN = 'linkedin';
const INSTAGRAM = 'instagram';
const WHATSAPP = 'whatsapp';

export const SOCIAL_NETWORKS = {
  [LINKEDIN]: {
    key: 'linkedin',
    href: 'https://www.linkedin.com/company/livip/about/',
    Icon: LinkedInIcon,
  },

  [INSTAGRAM]: {
    key: 'instagram',
    href: 'https://instagram.com/livip_br',
    Icon: InstagramIcon,
  },

  [WHATSAPP]: {
    key: 'whatsapp',
    href: 'https://wa.me/+5519983250320',
    Icon: WhatsAppIcon,
  },
};

export const SOCIAL_NETWORKS_ORDERED = [
  LINKEDIN,
  INSTAGRAM,
  WHATSAPP,
];
