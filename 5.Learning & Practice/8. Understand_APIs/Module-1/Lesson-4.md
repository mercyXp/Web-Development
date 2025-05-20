
---
# 📘 Lesson 4: Common API Terms

## 🧠 Learning Objective

Familiarize yourself with the most important terms you’ll encounter when working with APIs. These terms will help you read documentation and communicate clearly as a developer.

---

## 🧩 Key API Terminology

Here’s a breakdown of essential API-related terms and what they mean in plain English.

---

### 🔹 **API (Application Programming Interface)**

A set of rules that allows one software system to talk to another.

> Think of it as a messenger or middleman between apps.

---

### 🔹 **Client**

The part of the system that sends requests to the API.

> Example: Your browser or mobile app.

---

### 🔹 **Server**

The system that receives API requests and sends back responses.

> Think of it as the “kitchen” preparing and serving data.

---

### 🔹 **Request**

A message sent from the client to the API asking for data or telling it to do something.

> Example: “Give me all blog posts”
>
> ```http
> GET /posts
> ```

---

### 🔹 **Response**

The data sent back by the server after processing the request.

> Usually in **JSON** or **XML** format.

---

### 🔹 **Endpoint**

A specific URL where a client can access a resource or service.

> Example:
> `https://api.example.com/users/1` is an endpoint to get details of user 1.

---

### 🔹 **Resource**

A data object or entity exposed via an API.

> Example: “users”, “products”, or “posts” in a blog API.

---

### 🔹 **Method (HTTP Verb)**

Defines the action to take on a resource. Common methods include:

| Method | Purpose         |
| ------ | --------------- |
| GET    | Retrieve data   |
| POST   | Create new data |
| PUT    | Update data     |
| DELETE | Delete data     |

---

### 🔹 **JSON (JavaScript Object Notation)**

A lightweight format for exchanging data, commonly used in APIs.

```json
{
  "name": "Alice",
  "age": 30
}
```

---

### 🔹 **Status Code**

A 3-digit code returned in the response that shows the result of the request.

| Code | Meaning               | Description                           |
| ---- | --------------------- | ------------------------------------- |
| 200  | OK                    | Successful request                    |
| 201  | Created               | New resource was created              |
| 400  | Bad Request           | Something was wrong with the request  |
| 401  | Unauthorized          | You need to log in or provide a token |
| 404  | Not Found             | The requested item doesn't exist      |
| 500  | Internal Server Error | Something broke on the server         |

---

### 🔹 **API Key / Token**

A unique code used to authenticate and identify users or apps accessing the API.

> Example:
> `?apikey=12345abcde`
> Required for many APIs to prevent abuse and control access.

---

## 🧠 Summary

| Term        | In Simple Words                               |
| ----------- | --------------------------------------------- |
| API         | A rulebook for software to talk to each other |
| Client      | The app asking for data                       |
| Server      | The system sending back the data              |
| Endpoint    | The API URL you connect to                    |
| Method      | What action you want to take (GET, POST…)     |
| JSON        | A readable format for data                    |
| Status Code | Tells you what happened (OK, error…)          |

---

## 🧪 Quick Exercise

Match the term to its meaning (answer in your head or write it down):

| Term            | Meaning                                   |
| --------------- | ----------------------------------------- |
| \_\_\_ Client   | A. A location on the API you can request  |
| \_\_\_ JSON     | B. The app or browser making the request  |
| \_\_\_ GET      | C. Request to retrieve data               |
| \_\_\_ Endpoint | D. Format for sending data back and forth |

---

## 🎉 Module 1 Complete!

You now understand:

* What an API is and how it works
* Different types of APIs (access and architecture)
* Core concepts and terms

✅ You're ready to move on to **Module 2: How APIs Work** — where we’ll go deeper into **HTTP**, **methods**, and tools like **Postman** to interact with real APIs.


