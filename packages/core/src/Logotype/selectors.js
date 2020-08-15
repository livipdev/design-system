import RootLogotype from './Root';
import ProductLogotype from './Product';
import { VARIANT_ROOT } from './constants';

export const selectVariant = (variant) => (
  variant === VARIANT_ROOT
    ? RootLogotype
    : ProductLogotype
)
