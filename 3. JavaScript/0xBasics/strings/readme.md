# 🔤 How to work with strings in JavaScript
JavaScript provides many powerful features for creating, inspecting, modifying, and manipulating strings. This guide covers the essential techniques for working with strings effectively.

---

## 🔤 Creating Strings

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}!`; // Template literal
```

- Use double (`"`) or single (`'`) quotes for basic strings.
- Use backticks (`` ` ``) for **template literals** which support interpolation and multiline text.

---

## 📏 String Properties

| Property | Description | Example |
|----------|-------------|---------|
| `length` | Returns the number of characters in a string | `'Hello'.length → 5` |

---

## 🔍 Inspecting Characters

| Method | Description | Example |
|--------|-------------|---------|
| `charAt(index)` | Returns the character at the specified index | `'Hello'.charAt(1) → 'e'` |
| `charCodeAt(index)` | Returns UTF-16 code unit of the character | `'A'.charCodeAt(0) → 65` |
| `codePointAt(index)` | Returns Unicode code point | `'😊'.codePointAt(0) → 128522` |

---

## 🔎 Searching in Strings

| Method | Description | Example |
|--------|-------------|---------|
| `includes(substring)` | Checks if string contains substring | `'Hello'.includes('ll') → true` |
| `startsWith(prefix)` | Checks if string starts with prefix | `'Hello'.startsWith('He') → true` |
| `endsWith(suffix)` | Checks if string ends with suffix | `'Hello'.endsWith('lo') → true` |
| `indexOf(value)` | Returns first index of value | `'Hello'.indexOf('l') → 2` |
| `lastIndexOf(value)` | Returns last index of value | `'Hello'.lastIndexOf('l') → 3` |
| `search(regex)` | Searches with a regex and returns index | `'Hello'.search(/e/) → 1` |

---

## ✂️ Extracting Parts of Strings

| Method | Description | Example |
|--------|-------------|---------|
| `slice(start, end)` | Extracts part of string | `'Hello'.slice(1, 4) → 'ell'` |
| `substring(start, end)` | Similar to slice (no negatives) | `'Hello'.substring(1, 4) → 'ell'` |
| `substr(start, length)` | Deprecated; use `slice()` | `'Hello'.substr(1, 3) → 'ell'` |

---

## 🔁 Changing Content

| Method | Description | Example |
|--------|-------------|---------|
| `replace(old, new)` | Replaces first match | `'Hello'.replace('l', 'x') → 'Hexlo'` |
| `replaceAll(old, new)` | Replaces all matches | `'Hello'.replaceAll('l', 'x') → 'Hexxo'` |
| `toUpperCase()` | Converts to uppercase | `'Hello'.toUpperCase() → 'HELLO'` |
| `toLowerCase()` | Converts to lowercase | `'Hello'.toLowerCase() → 'hello'` |
| `trim()` | Removes whitespace from both ends | `'  Hi  '.trim() → 'Hi'` |
| `trimStart()` | Removes leading whitespace | `'  Hi'.trimStart() → 'Hi'` |
| `trimEnd()` | Removes trailing whitespace | `'Hi  '.trimEnd() → 'Hi'` |
| `padStart(length, pad)` | Pads at the beginning | `'5'.padStart(3, '0') → '005'` |
| `padEnd(length, pad)` | Pads at the end | `'5'.padEnd(3, '0') → '500'` |
| `repeat(count)` | Repeats the string `count` times | `'ha'.repeat(3) → 'hahaha'` |

---

## 🧩 Splitting and Joining

| Method | Description | Example |
|--------|-------------|---------|
| `split(separator)` | Splits string into an array | `'a,b,c'.split(',') → ['a', 'b', 'c']` |
| `join(separator)` | Joins array into a string (used on arrays) | `['a', 'b'].join('-') → 'a-b'` |

---

## 🧠 Useful String Utilities

| Method | Description | Example |
|--------|-------------|---------|
| `concat(str2, str3)` | Joins strings together | `'Hello'.concat(' ', 'World') → 'Hello World'` |
| `localeCompare(str)` | Compares strings by locale | `'a'.localeCompare('b') → -1` |
| `normalize()` | Returns normalized Unicode form | `'é'.normalize('NFD')` |
| `toString()` | Converts string object to primitive | `new String('hi').toString() → 'hi'` |
| `valueOf()` | Returns primitive value | `new String('hi').valueOf() → 'hi'` |

---

## 🧪 Example

```js
let name = " Alice ";
let greeting = `Hello,${name.trim()}!`;
console.log(greeting); // Output: Hello,Alice!
```

---
