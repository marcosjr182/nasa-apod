import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const TODAY = moment();
export const MIN_DATE = TODAY.clone().subtract(2, 'year');

export function parse(date?: string): moment.Moment {
  const currentDate = moment(date, DATE_FORMAT);
  return currentDate.isValid() ? currentDate : moment();
}

export function dayBefore(date: moment.Moment) {
  return date.clone().subtract(1, 'day').format(DATE_FORMAT);
}

export function dayAfter(date: moment.Moment) {
  return date.clone().add(1, 'day').format(DATE_FORMAT);
}

export function isToday(date: moment.Moment) {
  return TODAY.isSame(date, 'day');
}

export function stringify(date: moment.Moment) {
  return date.format(DATE_FORMAT);
}

export function isOutsideRange(date: moment.Moment): boolean {
  return date.isBefore(MIN_DATE) || date.isAfter(TODAY)
}
