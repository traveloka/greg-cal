import getWeekdays from '../src/getWeekdays';

describe('Localization tests', () => {
  test('default (en-US)', () => {
    expect(getWeekdays()).toEqual([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ]);
  });

  test('id-ID', () => {
    expect(getWeekdays('id-ID')).toEqual([
      'Min',
      'Sen',
      'Sel',
      'Rab',
      'Kam',
      'Jum',
      'Sab',
    ]);
  });
});

describe('Weekday string format test', () => {
  test('long', () => {
    expect(getWeekdays('en-US', 'long')).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });
});

describe('First day of the week test', () => {
  test('mon', () => {
    expect(getWeekdays('en-US', 'short', 'mon')).toEqual([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ]);
  });
});
