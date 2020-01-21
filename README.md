# Greg Cal

A Collection of TypeScript utilities for implementing Gregorian Calendar. Fully-typed with additional JSDoc annotations for easy usage.

# Installation

Using yarn:

```
$ yarn add @traveloka/greg-cal
```

# List of Utilities

## 1. getDates()

Get an array of calendar dates for a given month and year appended with empty dates to fill the days before the first calendar day.

### Arguments

| Name              | Type                 | Default Value | Description                                                  |
| ----------------- | -------------------- | ------------- | ------------------------------------------------------------ |
| year              | `string` or `number` |               | Calendar Year                                                |
| month             | `number`             |               | Calendar Month (0 - 11)                                      |
| firstDayOfTheWeek | `"sun"` or `"mon"`   | `"sun"`       | First day of the week, "sun" for Sunday and "mon" for Monday |

### Returns

| Type     | Description    |
| -------- | -------------- |
| `Date[]` | Calendar dates |

### Example

```js
getDates(2018, 8, 'mon');
// => [ null, null, null, null, null, 2018-08-31T17:00:00.000Z, 2018-09-01T17:00:00.000Z, ... ]
```

## 2. getMonths()

Get all localized month names in a year.

### Arguments

| Name   | Type                                      | Default Value | Description                         |
| ------ | ----------------------------------------- | ------------- | ----------------------------------- |
| locale | `string`                                  | `"en-US"`     | Locale code (e.g. "en-US", "id-ID") |
| format | `"numeric", "2-digit", "long" or "short"` | `"long"`      | Month format                        |

### Returns

| Type       | Description |
| ---------- | ----------- |
| `string[]` | Month names |

### Example

```js
getMonths('en-US', 'short');
//=> [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
```

## 3. getWeekdays()

Get all localized weekday names in a year.

### Arguments

| Name              | Type                | Default Value | Description                                                  |
| ----------------- | ------------------- | ------------- | ------------------------------------------------------------ |
| locale            | `string`            | `"en-US"`     | Locale code (e.g. "en-US", "id-ID")                          |
| format            | `"long" or "short"` | `"short"`     | Weekday format                                               |
| firstDayOfTheWeek | `"sun"` or `"mon"`  | `"sun"`       | First day of the week, "sun" for Sunday and "mon" for Monday |

### Returns

| Type       | Description   |
| ---------- | ------------- |
| `string[]` | Weekday names |

### Example

```js
getWeekdays('en-US', 'short', 'mon');
//=> [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
```
