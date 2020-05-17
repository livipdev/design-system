import config from '@livipdev/config';

export const VARIANT_ROOT = config.variants.root;
export const VARIANT_TICKETS = config.variants.tickets;
export const VARIANT_ONE = config.variants.one;
export const VARIANT_TRAVEL = config.variants.travel;

export const DEFAULT_VARIANT = VARIANT_ROOT;

export const VARIANT_COMPONENTS = {
  [VARIANT_ROOT]: './Root',
  [VARIANT_TRAVEL]: './Product',
  [VARIANT_ONE]: './Product',
  [VARIANT_TICKETS]: './Product',
};
