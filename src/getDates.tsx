/**
 * Get all calendar dates
 * @param year Year
 * @param month Month (0 - 11)
 * @param firstDayOfTheWeek First day of the week
 * @returns Calendar dates
 */
function getDates(
  year: number | string,
  month: number,
  firstDayOfTheWeek: 'mon' | 'sun' = 'sun'
): Array<Date> {
  const firstDayIndex = firstDayOfTheWeek === 'sun' ? 0 : 1;

  const startDate = new Date(Number(year), month, 1);
  const endDate = new Date(Number(year), month + 1, 0);

  const startDayIndex = startDate.getDay();

  const diff = (startDayIndex - firstDayIndex + 7) % 7;

  const emptyStartDates = Array(diff).fill(null);
  const dates = Array(endDate.getDate())
    .fill(null)
    .map((_, index) => new Date(Number(year), month, index + 1));

  return emptyStartDates.concat(dates);
}

export default getDates;
