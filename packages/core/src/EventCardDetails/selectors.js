import {
  MILLISECONDS,
  UNITS,
} from './constants';

export const selectRelativeTime = (time) => {
  const now = new Date();
  const event = new Date(time);
  const relativeMilliseconds = event - now;

  return relativeMilliseconds;
};

export const selectRelativeObject = (relativeTime) => (
  relativeTime < MILLISECONDS.day ? selectHourObject(relativeTime) :
  relativeTime < MILLISECONDS.month ? selectDayObject(relativeTime) :
  selectMonthObject(relativeTime)
);

const selectHourObject = (relativeTime) => ({
  value: selectRoundedQuotient(relativeTime, MILLISECONDS.hour),
  unit: UNITS.hour,
});

const selectDayObject = (relativeTime) => ({
  value: selectRoundedQuotient(relativeTime, MILLISECONDS.day),
  unit: UNITS.day,
});

const selectMonthObject = (relativeTime) => ({
  value: selectRoundedQuotient(relativeTime, MILLISECONDS.month),
  unit: UNITS.month,
});

const selectRoundedQuotient = (dividend, divisor) => Math.round(dividend / divisor);
