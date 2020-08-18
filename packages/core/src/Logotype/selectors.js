import RootLogotype from './Root';
import ProductLogotype from './Product';
import { VARIANT_ROOT } from './constants';

export const selectVariant = (variant, rootLogotype) => (
  variant === VARIANT_ROOT || rootLogotype
    ? RootLogotype
    : ProductLogotype
)
