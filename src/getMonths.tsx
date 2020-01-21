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
  return Array(12)
    .fill(null)
    .map((_, index) => {
      const date = new Date(1995, index, 1);

      return date.toLocaleString(locale, { month: format });
    });
}

export default getMonths;
