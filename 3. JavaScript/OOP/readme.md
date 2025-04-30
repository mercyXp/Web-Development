# 🧱 Object-Oriented Programming (OOP) in JavaScript

## 📌 What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code using **objects** and **classes**. The main goal is to structure programs so that properties and behaviors are bundled into reusable and logical units (objects).

JavaScript is **prototype-based**, but supports OOP concepts through **constructor functions**, **prototypes**, and **ES6 classes**.

---

## 🎯 Core Concepts of OOP

### 1. 🧱 Classes and Objects

- A **class** is a blueprint for creating objects.
- An **object** is an instance of a class, containing specific data and methods.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user1 = new Person("Alice", 25);
user1.greet(); // "Hi, I'm Alice"
```

---

### 2. 👤 Encapsulation

Encapsulation hides internal details and exposes only what’s necessary. This protects the internal state of an object.

```js
class Counter {
  #count = 0; // private field

  increment() {
    this.#count++;
    console.log(this.#count);
  }
}

const c = new Counter();
c.increment(); // 1
// c.#count; // ❌ Error: private field
```

---

### 3. 🧬 Inheritance

Inheritance allows one class to inherit properties and methods from another class using the `extends` keyword.

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const d = new Dog();
d.speak(); // "Animal speaks"
d.bark();  // "Woof!"
```

---

### 4. 🎭 Polymorphism

Polymorphism allows methods to behave differently based on the object calling them. It's often achieved via method overriding.

```js
class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const pet = new Cat();
pet.speak(); // "Meow"
```

---

### 5. 📦 Abstraction

Abstraction hides complex logic and only exposes the essential parts. While JavaScript doesn’t have built-in abstract classes, you can achieve abstraction using base classes and conventions.

```js
class Vehicle {
  startEngine() {
    throw new Error("startEngine() must be implemented");
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}
```

---

## 🧠 Constructor Functions (Pre-ES6 OOP)

Before ES6, OOP was implemented using constructor functions and prototypes:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

const p = new Person("Tom");
p.greet(); // "Hello, Tom"
```

---

## 🧩 Why Use OOP?

- Better code **organization**
- Encourages **reuse** through inheritance
- Helps manage **complex systems**
- Makes code more **modular** and **scalable**

---

## ✅ Summary

| Concept        | Description |
|----------------|-------------|
| Class          | Blueprint for objects |
| Object         | Instance of a class |
| Encapsulation  | Hides internal details |
| Inheritance    | Reuse structure/behavior |
| Polymorphism   | Same method, different behavior |
| Abstraction    | Hides complexity, shows essentials |

---

🧪 **Tip**: Use OOP when building systems that model real-world entities with behavior, especially in large and complex applications.

```

---

KEEP CODING!