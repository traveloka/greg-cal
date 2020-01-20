type Locale = string;
type Format = 'numeric' | '2-digit' | 'long' | 'short';

export default (
  locale: Locale = 'en-US',
  format: Format = 'long'
): Array<string> => {
  const date = new Date('1995-01-01');
  const months = [];

  for (let i = 0; i < 12; i++) {
    date.setMonth(i);

    months.push(date.toLocaleString(locale, { month: format }));
  }

  return months;
};
