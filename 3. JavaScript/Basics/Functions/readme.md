# 🔧 Functions in JavaScript

## 📌 What is a Function?

A **function** is a reusable block of code designed to perform a specific task. Functions help make your code **modular**, **organized**, and **maintainable**.

---

## 🧱 Function Basics

### 🔹 Function Declaration (Named Function)

```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice")); // "Hello, Alice"
```

- Can be called **before** they are defined due to **hoisting**.
- Readable and great for reuse.

---

### 🔹 Function Expression

```js
const greet = function(name) {
  return "Hi, " + name;
};
console.log(greet("Bob")); // "Hi, Bob"
```

- Stored in a variable.
- Not hoisted (cannot be used before they are defined).

---

### 🔹 Arrow Function (ES6)

```js
const greet = (name) => {
  return "Hey, " + name;
};
```

- Shorter syntax.
- Does **not** have its own `this`, `arguments`, or `super`.

#### ✅ One-liner Arrow Function

```js
const square = x => x * x;
```

---

## 🎯 Function Parameters and Arguments

```js
function add(a, b) {
  return a + b;
}
add(3, 5); // 8
```

- **Parameters** are variables listed in the function definition.
- **Arguments** are the actual values passed to the function.

---

## 🧳 Default Parameters (ES6)

```js
function greet(name = "Guest") {
  return "Welcome, " + name;
}
greet(); // "Welcome, Guest"
```

---

## 🔁 Return Statement

- The `return` keyword ends a function and returns a value.

```js
function multiply(a, b) {
  return a * b;
}
```

- If `return` is omitted, the function returns `undefined`.

---

## 🧠 Function Scope

Variables declared inside a function are **local** to that function and **cannot be accessed** outside.

```js
function example() {
  let message = "Hello";
}
console.log(message); // Error: message is not defined
```

---

## ♾️ Recursive Functions

A function that calls itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120
```

---

## 📦 Anonymous Functions

Functions without a name, often used in expressions or as arguments.

```js
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);
```

---

## 🧩 Callback Functions

A function passed into another function as an argument.

```js
function processUserInput(callback) {
  const name = "Jane";
  callback(name);
}
processUserInput(function(name) {
  console.log("Hello, " + name);
});
```

---

## 💡 Higher-Order Functions

Functions that take other functions as arguments or return functions.

```js
function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 🧠 Summary

| Concept              | Description |
|----------------------|-------------|
| Function Declaration | Named, hoisted |
| Function Expression  | Stored in a variable, not hoisted |
| Arrow Function       | Concise syntax, lexical `this` |
| Parameters vs Arguments | Input vs actual values passed |
| Scope                | Functions have local scope |
| Callback             | Passed as an argument |
| Higher-Order         | Takes/returns a function |
| Recursion            | Function that calls itself |

---

🧪 **Tip**: Use functions to keep your code DRY (Don't Repeat Yourself)!

```

---

KEEP CODING!