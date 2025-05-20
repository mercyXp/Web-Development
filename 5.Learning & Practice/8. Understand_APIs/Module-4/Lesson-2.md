
---
## 📘Lesson 2: Using API Keys in Postman and Code

## 🧠 Learning Objective

Learn how to use API keys in **Postman** and in **code** to access protected endpoints securely.

---

## 🔐 Why Use API Keys?

* API keys identify **who** is making a request
* They're often used to **limit usage**, **enforce quotas**, and **control access**
* Common in APIs like OpenWeather, Google Maps, and many public datasets

---

## 🧪 Using API Keys in Postman

### 🛠 Step-by-Step Example:

Let’s say you’re using this example weather API:

```
https://api.example.com/weather?city=London&apikey=123abc
```

### Option 1: Pass the key in the **query parameters**

1. Open Postman
2. Set the request type to `GET`
3. Enter the URL:

   ```
   https://api.example.com/weather
   ```
4. Go to the **Params** tab
5. Add the key-value pairs:

   * Key: `city`, Value: `London`
   * Key: `apikey`, Value: `123abc`

### Option 2: Pass the key in the **headers**

1. Use the same URL:

   ```
   https://api.example.com/weather
   ```
2. Go to the **Headers** tab
3. Add:

   * Key: `Authorization`, Value: `Bearer 123abc`
     *(or use `apikey: 123abc` depending on the API’s docs)*

---

## 💻 Using API Keys in Code (JavaScript Example)

### ✅ Fetch Example (with query string):

```javascript
fetch('https://api.example.com/weather?city=London&apikey=123abc')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### ✅ Fetch Example (with headers):

```javascript
fetch('https://api.example.com/weather', {
  headers: {
    'Authorization': 'Bearer 123abc'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

## 🔒 Best Practices for Using API Keys

* **Never expose** your API keys in frontend code (JS, HTML)
* Use **environment variables** in backend/server code
* Always **rotate** keys if they are leaked or compromised

---

## 🧠 Summary

* You can pass API keys in either **query parameters** or **headers**
* Postman helps test both methods easily
* In code, use `fetch()` or a library like `axios` to pass API keys securely
* Always protect your API keys from exposure

---

## 🧪 Quick Practice

**Question:**
What is the safer way to send API keys: in headers or query strings?

<details>
<summary>💡 Answer</summary>
In headers — query strings can be logged or cached in browser history.
</details>

---

