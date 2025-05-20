
---

# 📘 Lesson 3: Types of APIs

## 🧠 Learning Objective

Learn the different types of APIs, what makes them unique, and when they are used in real-world applications.

---

## 🗂️ Overview

Not all APIs are the same. Based on how they are shared and who can access them, APIs fall into **four main types**:

1. **Open (Public) APIs**
2. **Partner APIs**
3. **Internal (Private) APIs**
4. **Composite APIs**

---

## 1️⃣ **Open (Public) APIs**

🔓 **Accessible by anyone.**
Usually require an API key (free or paid), but no special approval.

### ✅ Common Uses:

* Apps that use public data: weather, news, currency exchange, maps.
* Developers building third-party tools.

### 🧪 Example:

```bash
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
```

### 🌐 Real Examples:

* OpenWeatherMap API
* NASA APIs
* Cat Facts API 😺

### ✔️ Pros:

* Easy to use
* Great for learning and prototyping

---

## 2️⃣ **Partner APIs**

🤝 **Shared only with selected third parties.**
Used for business partnerships, integrations, or affiliate apps.

### 🔐 Access:

* Requires approval or contracts.
* Often protected by API keys, OAuth tokens, or IP whitelisting.

### 🧪 Example:

A travel app accessing airline APIs to check seat availability and pricing.

### ✔️ Pros:

* More secure and controlled
* Supports business collaboration

---

## 3️⃣ **Internal (Private) APIs**

🏢 **Used only inside a company or organization.**
Not exposed to the public.

### 💡 Example Use:

* A company’s mobile app communicates with its backend server.
* An internal admin dashboard querying user data.

### ⚙️ Example:

```bash
GET https://internal.api.mycompany.com/users
```

### ✔️ Pros:

* Secure and tailored to internal systems
* Enables modular architecture (microservices)

---

## 4️⃣ **Composite APIs**

🔗 **Combine multiple APIs into one call.**
Useful in complex systems where you need data from different sources at once.

### 💡 Example Use:

An app fetches:

* User details from Service A
* Order history from Service B
* Product recommendations from Service C
  All in a single API call.

### ✔️ Pros:

* Saves time and reduces network load
* Simplifies front-end logic

---

## 📊 Comparison Table

| Type        | Access Level        | Use Case                     | Security    |
| ----------- | ------------------- | ---------------------------- | ----------- |
| Open/Public | Anyone              | Public data, open apps       | Low–Medium  |
| Partner     | Authorized partners | Business integrations        | Medium–High |
| Internal    | Private teams only  | Internal systems & apps      | High        |
| Composite   | Varies              | Combining multiple API calls | Medium      |

---

## 📱 Real-World Examples

| Company     | API Type  | Purpose                                |
| ----------- | --------- | -------------------------------------- |
| Google Maps | Public    | Location & directions                  |
| Stripe      | Partner   | Payment processing                     |
| Netflix     | Internal  | Video recommendations, streaming data  |
| Uber        | Composite | Maps, billing, user data – all at once |

---

## 🧠 Summary

* **Open APIs** are public and great for experimentation.
* **Partner APIs** are restricted and used for business collaboration.
* **Internal APIs** help manage company systems.
* **Composite APIs** combine data from multiple sources into one response.

Each type of API plays a specific role depending on **who needs the data**, **how secure it must be**, and **how complex the system is**.

---

## 📚 Optional Reading

* [What is an API? – IBM Developer](https://developer.ibm.com/articles/what-is-an-api/)
* [Postman Public API Network](https://www.postman.com/explore)

---


