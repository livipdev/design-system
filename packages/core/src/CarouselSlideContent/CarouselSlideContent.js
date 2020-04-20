import React from 'react';

import ContainerWithBackground from '../ContainerWithBackground';
import Grid from '../Grid';
import Title from '../Title';
import { SCREEN_SIZES } from '../styles/theme/constants';

import { buildMessage } from './builders';
import { selectMergedClasses } from './selectors';

const CarouselSlideContent = ({
  classes,
  variant,
  title,
  subtitle,
  suptitle,
  background,
}) => {
  const mergedContentClasses = selectMergedClasses(classes, variant, 'content');
  const mergedTitleClasses = selectMergedClasses(classes, variant, 'title');
  const normalizedTitle = buildMessage(title, 'h1');
  const normalizedSubtitle = buildMessage(subtitle, 'subtitle1');
  const normalizedSuptitle = buildMessage(suptitle, 'subtitle2');

  return (
    <ContainerWithBackground
      customClass={classes.container}
      background={background}
    >
      <Grid
        className={mergedContentClasses}
        alignItems='center'
        container
      >
        <Title
          title={normalizedTitle}
          subtitle={normalizedSubtitle}
          suptitle={normalizedSuptitle}
          maxWidth={SCREEN_SIZES.SMALL}
          customClass={mergedTitleClasses}
        />
      </Grid>
    </ContainerWithBackground>
  );
};

export default CarouselSlideContent;
