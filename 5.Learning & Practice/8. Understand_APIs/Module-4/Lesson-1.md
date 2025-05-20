
---
## 📘Lesson 1: What is API Authentication?

## 🧠 Learning Objective

Understand what API authentication is, why it's important, and get familiar with common methods like **API keys**, **tokens**, and **headers**.

---

## 🔐 Why Do APIs Need Authentication?

APIs often expose sensitive data or actions — like user profiles, payment systems, or private messages.

**Authentication** ensures that only authorized users or applications can:

* Access protected data
* Perform write or delete operations
* Avoid exceeding rate limits

---

## 🧩 Key Concepts

| Term           | Meaning                                                               |
| -------------- | --------------------------------------------------------------------- |
| Authentication | Verifying *who* you are (user or app)                                 |
| Authorization  | Verifying *what* you're allowed to do                                 |
| API Key        | A unique string used to identify the calling app                      |
| Bearer Token   | A secret string that proves the user is authenticated                 |
| Header         | A part of the HTTP request used to include authentication information |

---

## 🔑 Common Authentication Methods

### 1. **API Key**

* Simple and widely used
* Passed in the **URL** or in **headers**
* Example:

```http
GET /api/data?api_key=abc123
```

OR

```http
GET /api/data
Authorization: api_key abc123
```

### 2. **Bearer Token**

* A more secure method
* Typically used with OAuth or login-based APIs
* Sent in the `Authorization` header:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 🚧 Public vs. Protected APIs

| API Type           | Example                         | Authentication  |
| ------------------ | ------------------------------- | --------------- |
| Public (open)      | Fetching weather data           | Optional / None |
| Protected (secure) | Accessing user email, bank info | Required        |

---

## 🔍 Real-World Example

**OpenWeatherMap API** (public):

```bash
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
```

**GitHub API** (protected):

```bash
GET https://api.github.com/user
Authorization: Bearer <your_token>
```

---

## 🧠 Summary

* Authentication = proving who you are
* Most APIs require it for secure or personalized data
* API keys and tokens are common authentication tools
* These are sent in headers or query parameters

---

## 🧪 Quick Practice

**Question:**
Why might you **hide your API key in environment variables** rather than hardcoding it into your app?

<details>
<summary>💡 Answer</summary>
To keep it secret and prevent accidental exposure in public code (e.g. GitHub).
</details>

---


