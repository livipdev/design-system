import remove from 'lodash/remove';

const addVariantToCarouselClasses = (classes, variant) => ([
  classes.carosel,
  classes[variant],
]);

const selectClassName = (classes) = classes.join(' ');

export const selectCarouselClasses = flow(addVariantToCarouselClasses, remove, selectClassName);
