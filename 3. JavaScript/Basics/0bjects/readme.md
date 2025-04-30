# Objects

## 📌 Introduction

In JavaScript, an **object** is a standalone entity, with properties and type. It’s a collection of `key-value pairs`. Objects are one of the most important data structures in JavaScript, used to store and manage data.

## 🧱 Syntax

```js
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

- **Keys (properties)**: `name`, `age`, `isStudent`
- **Values**: `"Alice"`, `25`, `true`

## 🛠 Creating Objects

### 1. Using Object Literal (Most common)
```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
```

### 2. Using `new Object()`
```js
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
```

### 3. Using a Constructor Function
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("Bob", 30);
```

### 4. Using `Object.create()`
```js
const proto = { greet() { console.log("Hello"); } };
const obj = Object.create(proto);
obj.name = "Sam";
```

## 📖 Accessing Properties

- **Dot notation**: `object.property`
- **Bracket notation**: `object["property"]`

```js
console.log(person.name);       // "Alice"
console.log(person["age"]);     // 25
```

## ✍️ Modifying Properties

```js
person.age = 26;
person["isStudent"] = false;
```

## ➕ Adding Properties

```js
person.gender = "female";
```

## ❌ Deleting Properties

```js
delete person.isStudent;
```

## 🔁 Looping Through Objects

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

## 🔍 Checking Property Existence

```js
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true
```

## 📦 Object Methods

Objects can have functions as properties—these are called **methods**.

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // "Hello, Alice"
```

## 🧠 Useful Built-in Methods

```js
Object.keys(person);     // ["name", "age"]
Object.values(person);   // ["Alice", 25]
Object.entries(person);  // [["name", "Alice"], ["age", 25]]
```

## 🧬 Nested Objects

```js
const student = {
  name: "Lena",
  address: {
    street: "123 Main St",
    city: "Lagos"
  }
};

console.log(student.address.city); // "Lagos"
```

## 📌 Summary

- Objects are key-value pair collections.
- Use dot or bracket notation to access properties.
- You can add, update, or delete properties dynamically.
- Methods are functions inside objects.
- Objects can be nested and used to represent structured data.

---

🧠 **Tip**: Objects are the foundation for more advanced concepts like prototypes and classes in JavaScript.

```

