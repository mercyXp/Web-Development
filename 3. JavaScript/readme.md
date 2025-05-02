(Roadmap)[https://roadmap.sh/javascript]
# 📘 JavaScript Key Concepts 

This document outlines the fundamental concepts of JavaScript that every developer should understand before diving into Object-Oriented Programming (OOP).

---

## 📌 1. Variables and Data Types

### 🔹 `var`, `let`, `const`
- `var`: function-scoped
- `let`: block-scoped (preferred for mutable variables)
- `const`: block-scoped, immutable (cannot be reassigned)

### 🔹 Data Types
- **Primitive**: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- **Non-Primitive**: `Object`, `Array`, `Function`

---

## 📌 2. Operators

### 🔹 Arithmetic: `+`, `-`, `*`, `/`, `%`
### 🔹 Assignment: `=`, `+=`, `-=`, etc.
### 🔹 Comparison: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
### 🔹 Logical: `&&`, `||`, `!`
### 🔹 Ternary: `condition ? value1 : value2`

---

## 📌 3. Control Flow

### 🔹 Conditional Statements
```js
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}
```

### 🔹 Switch Statement
```js
switch (value) {
  case 1:
    // code
    break;
  default:
    // code
}
```

### 🔹 Loops
- `for`
- `while`
- `do...while`
- `for...of` (for arrays)
- `for...in` (for objects)

---

## 📌 4. Functions

### 🔹 Function Declaration
```js
function greet(name) {
  return "Hello " + name;
}
```

### 🔹 Function Expression
```js
const greet = function(name) {
  return "Hello " + name;
};
```

### 🔹 Arrow Functions
```js
const greet = (name) => "Hello " + name;
```

---

## 📌 5. Scope

- **Global Scope**
- **Function Scope**
- **Block Scope** (`let` and `const`)

---

## 📌 6. Hoisting

- Variables declared with `var` are hoisted (declared at the top of their scope but not initialized).
- Function declarations are hoisted.

---

## 📌 7. `this` Keyword

- Refers to the context in which a function is executed.
- Behavior changes between regular functions and arrow functions.

---

## 📌 8. Arrays

### 🔹 Declaration and Access
```js
const fruits = ["apple", "banana"];
console.log(fruits[0]); // "apple"
```

### 🔹 Common Methods
- `push()`, `pop()`, `shift()`, `unshift()`
- `forEach()`, `map()`, `filter()`, `reduce()`
- `includes()`, `indexOf()`, `slice()`, `splice()`

---

## 📌 9. Objects

### 🔹 Key-Value Pairs
```js
const user = {
  name: "Tom",
  age: 30
};
```

### 🔹 Access: `user.name` or `user["name"]`

---

## 📌 10. Events (in Browser JavaScript)

```js
element.addEventListener("click", function () {
  // handle click
});
```

---

## 📌 11. DOM Manipulation (Browser)

- `document.getElementById()`
- `document.querySelector()`
- `.innerText`, `.innerHTML`, `.style`, `.classList`

---

## 📌 12. JSON (JavaScript Object Notation)

- Used for data exchange
```js
const obj = { name: "Tom" };
const jsonStr = JSON.stringify(obj);
const parsed = JSON.parse(jsonStr);
```

---

## 📌 13. Error Handling

```js
try {
  // code
} catch (error) {
  console.error(error.message);
} finally {
  // optional cleanup
}
```

---

## 📌 14. ES6+ Features

- Destructuring
- Template Literals
- Spread and Rest Operators
- Default Parameters
- `let` & `const`
- Arrow Functions
- Modules (import/export)

---

## ✅ Ready for OOP?

Once you're comfortable with the above, you're ready to move on to **Object-Oriented Programming**, which introduces:
- `class`
- `constructor`
- `this`
- Inheritance
- Encapsulation
- Polymorphism
- Abstraction

---

🧠 **Tip**: Practice each concept with small examples and exercises before jumping into complex topics like classes and prototypes.

```
