# Greg Cal

A Collection of TypeScript utilities for implementing Gregorian Calendar.

## Functions

### getWeekdays

Returns an Array of strings containing every weekdays on a given month.

**Arguments**
`[locale=en-US] (string)`: Language to use for string translation
`[type=short] (long | short)`: Long or short weekday format
`[firstDayOfTheWeek=sun] (sun | mon | tue | wed | thu | fri | sat)`: First day of the week

**Returns**
`(Array)`: Returns an array consists of weekday strings

**Usage Example**

```js
getWeekdays();
// Returns ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

getWeekdays('id-ID', 'long', 'mon');
// Returns ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
```
