import { isNumeric } from './internal';
import { isInteger } from './number';

function isDate(date: any): date is Date {
  return !isNaN(date) && date instanceof Date;
}

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(date: any, min: Date = minDate, max: Date = maxDate): date is Date {
  return isDate(date) && date >= min && date <= max ? true : false;
}

function isTimestamp(ts:any, typeCheck = true): ts is number {
  if (isInteger(ts, typeCheck))
    return isNumeric(new Date(parseInt(ts+'')).getTime());
  else
    return false;
}

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
function isValidTimestamp(ts: any, min = -2208989361000, max = 7258114800000, typeCheck = true): ts is number {
  return isTimestamp(ts, typeCheck) && ts >= min && ts <= max ? true : false;
}

export {
  isDate,
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
