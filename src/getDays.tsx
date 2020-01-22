/**
 * Get all localized weekday names
 * @param locale Locale code
 * @param format Weekday format
 * @param firstDayOfTheWeek First day of the week
 * @return Weekday names
 */
function getDays(
  locale: string = 'en-US',
  format: 'long' | 'short' = 'short',
  firstDayOfTheWeek: 'sun' | 'mon' = 'sun'
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
  ];

  switch (firstDayOfTheWeek) {
    case 'mon':
      dates = dates.slice(1, 8);
      break;
    default:
      dates = dates.slice(0, 7);
  }

  return dates.map(date => date.toLocaleString(locale, { weekday: format }));
}

export default getDays;
