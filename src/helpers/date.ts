import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

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
  return moment().isSame(date, 'day');
}

export function stringify(date: moment.Moment) {
  return date.format(DATE_FORMAT);
}
