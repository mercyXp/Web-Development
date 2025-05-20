
---

# 📘 Lesson 1: What is an API?

## 🧠 Learning Objective

Understand what an API is, why it matters, and how it helps different software systems communicate.

---

## 🚀 Introduction

**API** stands for **Application Programming Interface**.

It’s a way for **two different pieces of software** to **communicate** with each other — like a waiter between a customer and a kitchen.

You use APIs **every day** without even realizing it:

* When you check the weather on your phone ✅
* When you log into a site using Google or Facebook ✅
* When your Uber app talks to Google Maps ✅

---

## 📜 A Little History

APIs have been around for decades, but they’ve evolved over time:

| Era             | Key Milestones                                                                       |
| --------------- | ------------------------------------------------------------------------------------ |
| **1960s–1980s** | APIs were mainly used within large systems.                                          |
| **1990s**       | APIs started being used for software libraries (e.g., Windows API).                  |
| **2000s**       | Web APIs (especially RESTful APIs) emerged, enabling apps to talk over the internet. |
| **Today**       | APIs power almost all modern apps and cloud-based systems.                           |

> In 2000, eBay launched one of the first public web APIs. Since then, APIs have become the backbone of the internet economy.

---

## 🍽️ A Real-World Analogy: The Restaurant Menu

An **API is like a restaurant menu**:

* The **menu** is the API – it shows what you can ask for.
* You, the **customer**, are the app or user.
* The **waiter** is the API system – it takes your order to the kitchen and brings the response.
* The **kitchen** is the server – it prepares the data and sends it back to you.

You don’t go into the kitchen and cook yourself.
You don’t need to know **how** the kitchen works — just **what** you can ask for and **how** to ask.

---

## 🔧 A Simple Technical Definition

> An API is a set of **rules** that lets one software application **access the data or functionality** of another software application.

Examples:

* A **weather app** asking a weather API for temperature data.
* An **e-commerce website** calling a shipping API to calculate delivery costs.
* A **mobile banking app** retrieving your transaction history from a bank’s system.

---

## 🧩 Where APIs Fit In

* **Frontend**: What the user sees (e.g., a mobile app or website).
* **Backend**: The server and database behind the scenes.
* **API**: The bridge between them.

```
[User / App] ←→ [API] ←→ [Server / Database]
```

---

## 💡 Why APIs Matter

* **Save time**: Reuse existing services (e.g., Google Maps API).
* **Enable integration**: Let different apps work together.
* **Encourage modular design**: Build systems as reusable parts.
* **Open up data**: Share public information easily (e.g., public datasets, open data APIs).

---

## 🧪 Mini Exercise (No Code)

Open this in your browser:
👉 [`https://jsonplaceholder.typicode.com/posts/1`](https://jsonplaceholder.typicode.com/posts/1)

You’ll see a block of JSON data like:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat",
  "body": "quia et suscipit..."
}
```

🎉 Congratulations — you just made an **API request** and got a **response**!

---

## 📝 Key Terms

| Term         | Description                                   |
| ------------ | --------------------------------------------- |
| **API**      | Interface that allows software to communicate |
| **Client**   | The app making the request                    |
| **Server**   | The system responding with data               |
| **Request**  | The message sent to get data                  |
| **Response** | The data returned                             |
| **JSON**     | Common format used in API responses           |

---

## ✅ Summary

* An API is like a **middleman** between two software systems.
* You use APIs all the time — apps, websites, even smart devices.
* APIs make it possible to build faster, smarter, and more connected software.

---

## 📚 Optional Reading

* [What is an API? – Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
* [API History Timeline – Nordic APIs](https://nordicapis.com/the-evolution-of-apis-an-infographic/)

---


