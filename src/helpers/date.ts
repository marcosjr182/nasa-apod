import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

export function validate(date: string = '') {
  return moment(date, DATE_FORMAT).isValid();
}

export function fallbackDate() {
  return moment().format(DATE_FORMAT);
}
