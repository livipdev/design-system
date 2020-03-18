import dynamic from 'next/dynamic';

import { VARIANT_COMPONENTS } from './constants';

export const selectVariant = (variant) =>
  dynamic(() =>
    import(VARIANT_COMPONENTS[variant]));
