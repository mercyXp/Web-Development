
---

# 📘 Lesson 2: How APIs Work (Visually)

## 🧠 Learning Objective

Understand how APIs work under the hood using real-world examples and simple visual explanations.

---

## 📦 The Basic Idea

When two systems talk via an API, one **sends a request**, and the other **returns a response**.

It’s like sending a letter:

* 📨 You write and send a letter (Request).
* 📬 The recipient reads it and sends back a reply (Response).

---

## 🌐 The Web API Workflow

Let’s look at a **typical API interaction** on the web:

```
[ You / App ]
     ↓
 Sends a Request (HTTP)
     ↓
[ API Server ]
     ↓
Returns a Response (JSON)
     ↓
[ You / App ]
```

---

## 🧭 Step-by-Step Example: Weather App

### Scenario:

You open a weather app to check the current temperature in your city.

### Here’s what happens behind the scenes:

1. **You enter your city** (e.g., “London”).
2. The app sends a **GET request** to a weather API:

   ```
   GET https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London
   ```
3. The weather API looks up the data.
4. It sends back a **JSON response**:

   ```json
   {
     "location": {
       "name": "London"
     },
     "current": {
       "temp_c": 22.5,
       "condition": {
         "text": "Sunny"
       }
     }
   }
   ```
5. The app shows:

   > ☀️ 22.5°C and Sunny in London

### 🧠 You don’t see the request or response — only the result.

But behind the scenes, it’s all happening via an **API**.

---

## 🔤 API Requests Use HTTP Methods

APIs use **HTTP methods** to define what kind of operation to perform.

| Method     | Action               | Example             |
| ---------- | -------------------- | ------------------- |
| **GET**    | Read data            | Get weather info    |
| **POST**   | Create new data      | Add a new user      |
| **PUT**    | Update existing data | Edit a user profile |
| **DELETE** | Remove data          | Delete a comment    |

Example GET request:

```
GET https://api.example.com/products/1
```

---

## 📬 Responses are Often in JSON Format

Most modern APIs return data in **JSON** (JavaScript Object Notation), which is:

* Lightweight
* Easy for both humans and machines to read

Example response:

```json
{
  "id": 1,
  "name": "T-shirt",
  "price": 19.99
}
```

---

## 🔢 HTTP Status Codes

Every API response includes a **status code** that tells you whether the request succeeded or failed.

| Code | Meaning      | Example                                |
| ---- | ------------ | -------------------------------------- |
| 200  | OK           | ✅ Data returned successfully           |
| 201  | Created      | ✅ New item created                     |
| 400  | Bad Request  | ❌ The request was incorrect            |
| 401  | Unauthorized | ❌ You need to log in or use an API key |
| 404  | Not Found    | ❌ Resource doesn’t exist               |
| 500  | Server Error | ❌ Something broke on the server side   |

---

## 📱 Real-World Examples

| App       | What It Does with APIs                             |
| --------- | -------------------------------------------------- |
| Uber      | Talks to Google Maps API for location & directions |
| Instagram | Uses APIs to fetch posts, stories, and comments    |
| Spotify   | Uses APIs to stream music, fetch playlists, etc.   |
| WhatsApp  | Sends messages via messaging APIs (under the hood) |

---

## 🧪 Activity: Play with a Public API (No Coding Needed)

1. Open your browser.
2. Go to this public API URL:
   👉 [`https://jsonplaceholder.typicode.com/users/1`](https://jsonplaceholder.typicode.com/users/1)

You’ll get a JSON response like:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}
```

✅ You just made an **API call** from your browser!

---

## 📌 Summary

* APIs work by sending **requests** and getting **responses**.
* Common request methods: **GET**, **POST**, **PUT**, **DELETE**.
* Responses usually come in **JSON** format.
* APIs are everywhere — powering almost every modern app you use.

---

## 📚 Optional Reading

* [MDN Web Docs: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [RESTful API Tutorial](https://restfulapi.net/)
* [Postman Learning Center](https://learning.postman.com/)

---


