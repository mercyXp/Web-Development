
---
## 📘Lesson 3: Authentication with Bearer Tokens

## 🧠 Learning Objective

Understand what **Bearer Tokens** are, how they’re used for authentication, and how to include them in requests securely using Postman and code.

---

## 🔐 What is a Bearer Token?

A **Bearer Token** is a **security token** issued to a user or application after logging in or authorizing. It proves the requester has permission to access certain resources.

* Often used in **OAuth 2.0**, **JWT (JSON Web Tokens)**, and secure REST APIs
* Usually short-lived (e.g., 15 minutes, 1 hour)
* Must be kept **secret** like a password

> Think of it like a **ticket**: once you’re verified, you get a pass that lets you access restricted areas — but only for a limited time.

---

## 🛠 Example Token (looks like this):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

You don’t need to understand the structure of the token yet — just how to use it.

---

## 📥 Using Bearer Tokens in Postman

### Step-by-Step

1. Open Postman
2. Set request type to `GET` or `POST`
3. Go to the **Authorization** tab
4. Set **Type** to `Bearer Token`
5. Paste your token in the **Token** field

Postman automatically adds this header:

```
Authorization: Bearer <your_token_here>
```

You can also add it manually under the **Headers** tab:

| Key           | Value                             |
| ------------- | --------------------------------- |
| Authorization | Bearer eyJhbGciOi... (your token) |

---

## 💻 Using Bearer Tokens in Code

### JavaScript Example

```javascript
fetch('https://api.example.com/protected-data', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOi...'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### Python Example (using `requests` library)

```python
import requests

headers = {
    'Authorization': 'Bearer eyJhbGciOi...'
}

response = requests.get('https://api.example.com/protected-data', headers=headers)
print(response.json())
```

---

## 🧱 When to Use Bearer Tokens

Use Bearer Tokens when:

* You're dealing with **authenticated users**
* The API supports **OAuth**, **JWT**, or **access tokens**
* You need to **secure endpoints** (e.g., account info, private posts, etc.)

---

## 🚨 Security Tips

* Never expose tokens in frontend apps or public repos
* Use **HTTPS** to prevent token leaks
* In real apps, **store tokens securely** (e.g., HTTP-only cookies or secure server storage)
* Expire or revoke tokens if compromised

---

## 🧠 Summary

* Bearer Tokens provide secure, short-term access to protected resources
* They are passed in the `Authorization` header like this:
  `Authorization: Bearer <token>`
* Postman and fetch/requests can easily include them
* Always protect your tokens like passwords

---

## 🧪 Quick Practice

**Question:**
Which HTTP header is used to send a Bearer Token?

<details>
<summary>💡 Answer</summary>
The `Authorization` header.
</details>

---


