import {
  selectRelativeTime,
  selectRelativeObject,
} from './selectors';

export const buildRelativeTimeProps = (time) => {
  const relativeMilliseconds = selectRelativeTime(time);
  const props = selectRelativeObject(relativeMilliseconds);

  return props;
};
