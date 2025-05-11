# 📚 JavaScript Arrays

Arrays are ordered collections of items (elements) in programming. They are used to store multiple values in a single variable and offer various methods to manipulate and interact with the data efficiently.

---

## 📌 Table of Contents

- [What is an Array?](#what-is-an-array)
- [Creating Arrays](#creating-arrays)
- [Accessing Elements](#accessing-elements)
- [Array Properties](#array-properties)
- [Common Array Methods](#common-array-methods)
- [Looping Through Arrays](#looping-through-arrays)
- [Multidimensional Arrays](#multidimensional-arrays)
- [Array vs Object](#array-vs-object)
- [Useful Tips](#useful-tips)

---

## 📦 What is an Array?

An **array** is a special variable that can hold more than one value at a time. Each value has a **numeric index**, starting from `0`.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: "apple"
```

---

## ✨ Creating Arrays

### Using Array Literals (Recommended)

```js
let colors = ["red", "green", "blue"];
```

### Using the Array Constructor

```js
let colors = new Array("red", "green", "blue");
```

### Creating Empty Arrays

```js
let emptyArray = [];
let fixedLength = new Array(5); // [ <5 empty items> ]
```

---

## 🔍 Accessing Elements

| Operation | Example | Result |
|----------|---------|--------|
| Access by index | `fruits[1]` | `"banana"` |
| Modify element | `fruits[1] = "kiwi"` | Updates index 1 to `"kiwi"` |
| Access last item | `fruits[fruits.length - 1]` | `"cherry"` |

---

## 🏷️ Array Properties

| Property | Description | Example |
|----------|-------------|---------|
| `length` | Returns the number of elements in the array | `fruits.length` |

---

## 🛠️ Common Array Methods

| Method | Description | Example |
|--------|-------------|---------|
| `push(item)` | Adds item to end | `arr.push("item")` |
| `pop()` | Removes last item | `arr.pop()` |
| `unshift(item)` | Adds item to beginning | `arr.unshift("item")` |
| `shift()` | Removes first item | `arr.shift()` |
| `concat(arr2)` | Merges two arrays | `arr.concat(arr2)` |
| `slice(start, end)` | Extracts a section | `arr.slice(1, 3)` |
| `splice(start, deleteCount, items...)` | Adds/removes items | `arr.splice(2, 1, "new")` |
| `indexOf(item)` | Finds first index | `arr.indexOf("apple")` |
| `includes(item)` | Checks existence | `arr.includes("apple")` |
| `reverse()` | Reverses array in place | `arr.reverse()` |
| `sort()` | Sorts elements alphabetically | `arr.sort()` |
| `join(separator)` | Joins elements into a string | `arr.join(", ")` |
| `toString()` | Converts to comma-separated string | `arr.toString()` |
| `fill(value, start, end)` | Fills array with value | `arr.fill(0, 1, 3)` |
| `flat(depth)` | Flattens nested arrays | `[[1],[2]].flat()` |

---

## 🔁 Looping Through Arrays

### Using `for` loop
```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Using `for...of` loop
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Using `forEach()` method
```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

---

## 🧮 Transforming Arrays

| Method | Description |
|--------|-------------|
| `map()` | Transforms each item and returns a new array |
| `filter()` | Returns a new array with elements that pass a test |
| `reduce()` | Reduces array to a single value |
| `find()` | Returns the first element that matches a condition |
| `findIndex()` | Returns the index of the first matching element |
| `some()` | Returns `true` if any element passes a test |
| `every()` | Returns `true` if all elements pass a test |

Example:
```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
```

---

## 🧱 Multidimensional Arrays

```js
let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3
```

---

## 🔄 Array vs Object

| Feature | Array | Object |
|--------|-------|--------|
| Ordered data | ✅ Yes | ❌ No |
| Indexed by number | ✅ Yes | ❌ No |
| Use for key-value pairs | ❌ No | ✅ Yes |

---

## 💡 Useful Tips

- Arrays are **zero-indexed**: The first element is at index `0`.
- Arrays are **mutable**: Methods like `push`, `pop`, `splice` can change the original array.
- Use **`const`** if you don't plan to reassign the array variable.
- Check if a variable is an array:
```js
Array.isArray(fruits); // true
```

---
