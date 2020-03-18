export const VARIANT_ROOT = 'root';
export const VARIANT_TRAVEL = 'travel';
export const VARIANT_ONE = 'one';
export const VARIANT_TICKETS = 'tickets';

export const DEFAULT_VARIANT = VARIANT_ROOT;

export const AVAILABLE_VARIANTS = [
  VARIANT_ROOT,
  VARIANT_TRAVEL,
  VARIANT_ONE,
  VARIANT_TICKETS,
];

export const VARIANT_COMPONENTS = {
  [VARIANT_ROOT]: './Root',
  [VARIANT_TRAVEL]: './Product',
  [VARIANT_ONE]: './Product',
  [VARIANT_TICKETS]: './Product',
};
