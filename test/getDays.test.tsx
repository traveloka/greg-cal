import getDays from '../src/getDays';

describe('Localization tests', () => {
  test('default (en-US)', () => {
    expect(getDays()).toEqual([
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
    expect(getDays('id-ID')).toEqual([
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
    expect(getDays('en-US', 'long')).toEqual([
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
    expect(getDays('en-US', 'short', 'mon')).toEqual([
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
