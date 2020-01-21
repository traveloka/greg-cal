import getDates from '../src/getDates';

describe('Append empty days in the start of the calendar', () => {
  test('First day of the week is Sunday and first day of the month is Sunday', () => {
    const dates = getDates(2018, 6);

    expect(dates).toHaveLength(31);

    dates.forEach((date, index) => {
      expect(date.getDate()).toBe(index + 1);
      expect(date.getDay()).toBe(index % 7);
    });
  });

  test('First day of the week is Sunday and first day of the month is Wednesday', () => {
    const dates = getDates(2018, 7);

    expect(dates).toHaveLength(34);

    dates.forEach((date, index) => {
      if (index < 3) {
        expect(date).toBeNull();
      } else {
        expect(date.getDate()).toBe(index - 2);
        expect(date.getDay()).toBe(index % 7);
      }
    });
  });

  test('First day of the week is Monday and first day of the month is Monday', () => {
    const dates = getDates(2018, 0, 'mon');

    expect(dates).toHaveLength(31);

    dates.forEach((date, index) => {
      expect(date.getDate()).toBe(index + 1);
      expect(date.getDay()).toBe((index + 1) % 7);
    });
  });

  test('First day of the week is Monday and first day of the month is Saturday', () => {
    const dates = getDates(2018, 8, 'mon');

    expect(dates).toHaveLength(35);

    dates.forEach((date, index) => {
      if (index < 5) {
        expect(date).toBeNull();
      } else {
        expect(date.getDate()).toBe(index - 4);
        expect(date.getDay()).toBe((index + 1) % 7);
      }
    });
  });

  test('First day of the week is Monday and first day of the month is Sunday', () => {
    const dates = getDates(2018, 3, 'mon');

    expect(dates).toHaveLength(36);

    dates.forEach((date, index) => {
      if (index < 6) {
        expect(date).toBeNull();
      } else {
        expect(date.getDate()).toBe(index - 5);
        expect(date.getDay()).toBe((index + 1) % 7);
      }
    });
  });
});
