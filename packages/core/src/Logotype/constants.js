import config from '@livipdev/config';

export const VARIANT_ROOT = config.variants.root;
export const VARIANT_TICKETS = config.variants.tickets;
export const VARIANT_ONE = config.variants.one;
export const VARIANT_INCENTIVE = config.variants.incentive;

export const DEFAULT_VARIANT = VARIANT_ROOT;

export const VARIANT_COMPONENTS = {
  [VARIANT_ROOT]: './Root',
  [VARIANT_INCENTIVE]: './Product',
  [VARIANT_ONE]: './Product',
  [VARIANT_TICKETS]: './Product',
};
