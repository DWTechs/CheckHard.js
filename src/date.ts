import { isNumeric } from './internal';
import { isInteger } from './number';

function isDate(date: any): boolean {
  return !isNaN(date) && date instanceof Date;
}

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(date: any, min: Date = minDate, max: Date = maxDate): boolean {
  return isDate(date) && date >= min && date <= max ? true : false;
}

function isTimestamp(timestamp:any): boolean {
  if (isInteger(timestamp, false)) {
    const newTimestamp = new Date(parseInt(timestamp)).getTime();
    return isNumeric(newTimestamp);
  }
  return false;
}

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
function isValidTimestamp(timestamp: any, min: number = -2208989361000, max: number = 7258114800000): boolean {
  return isTimestamp(timestamp) && timestamp >= min && timestamp <= max ? true : false;
}

export {
  isDate,
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
