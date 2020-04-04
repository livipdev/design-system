import kebabCase from 'lodash/kebabCase';

import { EVENT_DEFAULT } from './constants';

export const buildTabs = (events, selectorName, defaultEvent=EVENT_DEFAULT) => {
  const { categories } = events.reduce(mergeCategories, defaultEvent);
  const tabs = [...categories].map((category) => buildSingleTab(category, selectorName));

  return tabs
};

const mergeCategories = (prev, next) => ({
  categories: new Set([
    ...prev.categories,
    ...next.categories,
  ]),
});

const buildSingleTab = (category, selectorName) => {
  const id = buildTabId(category, selectorName);

  return ({
    id,
    label: category,
    value: category,
  });
};

const buildTabId = (category, selectorName) => {
  const id = `${selectorName}-${category}`;
  const normalizedId = kebabCase(id);

  return normalizedId;
}
