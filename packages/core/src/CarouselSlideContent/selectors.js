import flow from 'lodash/flow';
import remove from 'lodash/remove';

const addVariantToContentClasses = (classes, variant, type) => ([
  classes[type],
  classes[[variant, type].join('-')],
]);

const selectClassName = (classes) => classes.join(' ');

export const selectMergedClasses = flow(addVariantToContentClasses, remove, selectClassName);
