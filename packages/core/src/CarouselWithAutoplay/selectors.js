import flow from 'lodash/flow';
import remove from 'lodash/remove';

const addVariantToCarouselClasses = (classes, customClasses, variant) => ([
  classes.carousel,
  classes[variant],
  ...Object.values(customClasses),
]);

const selectClassName = (classes) => classes.join(' ');

export const selectCarouselClasses = flow(addVariantToCarouselClasses, remove, selectClassName);
