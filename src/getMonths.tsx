/**
 * Get all localized month names
 * @param locale Locale code
 * @param format Month format
 * @returns Month names
 */
function getMonths(
  locale: string = 'en-US',
  format: 'numeric' | '2-digit' | 'long' | 'short' = 'long'
): Array<string> {
  const date = new Date('1995-01-01');
  const months = [];

  for (let i = 0; i < 12; i++) {
    date.setMonth(i);

    months.push(date.toLocaleString(locale, { month: format }));
  }

  return months;
}

export default getMonths;
