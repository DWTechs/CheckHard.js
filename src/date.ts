import { isNumeric } from './internal';
import { isInteger } from './number';

function isDate(d: any): d is Date {
  return !isNaN(d) && d instanceof Date;
}

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(d: any, min: Date = minDate, max: Date = maxDate): d is Date {
  return isDate(d) && d >= min && d <= max;
}

function isTimestamp(t:any, type = true): t is number {
  return isInteger(t, type) && isNumeric(new Date(parseInt(t+'')).getTime());
}

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
function isValidTimestamp(t: any, min = -2208989361000, max = 7258114800000, type = true): t is number {
  return isTimestamp(t, type) && t >= min && t <= max;
}

export {
  isDate,
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
