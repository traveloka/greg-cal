/**
 * Get all localized weekday names
 * @param locale Locale code
 * @param format Weekday format
 * @param firstDayOfTheWeek First day of the week
 * @return Weekday names
 */
function getWeekdays(
  locale: string = 'en-US',
  format: 'long' | 'short' = 'short',
  firstDayOfTheWeek:
    | 'sun'
    | 'mon'
    | 'tue'
    | 'wed'
    | 'thu'
    | 'fri'
    | 'sat' = 'sun'
): Array<string> {
  let dates = [
    new Date('1995-03-26'),
    new Date('1995-03-27'),
    new Date('1995-03-28'),
    new Date('1995-03-29'),
    new Date('1995-03-30'),
    new Date('1995-03-31'),
    new Date('1995-04-01'),
    new Date('1995-04-02'),
    new Date('1995-04-03'),
    new Date('1995-04-04'),
    new Date('1995-04-05'),
    new Date('1995-04-06'),
    new Date('1995-04-07'),
    new Date('1995-04-08'),
  ];

  switch (firstDayOfTheWeek) {
    case 'mon':
      dates = dates.slice(1, 8);
      break;
    case 'tue':
      dates = dates.slice(2, 9);
      break;
    case 'wed':
      dates = dates.slice(3, 10);
      break;
    case 'thu':
      dates = dates.slice(4, 11);
      break;
    case 'fri':
      dates = dates.slice(5, 12);
      break;
    case 'sat':
      dates = dates.slice(6, 13);
      break;
    default:
      dates = dates.slice(0, 7);
  }

  return dates.map(date => date.toLocaleString(locale, { weekday: format }));
}

export default getWeekdays;
