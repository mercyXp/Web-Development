
---
## 📘Lesson 4: Hands-On — Calling an API with Code

## 🧠 Learning Objective

Learn how to send API requests and handle responses using code in a programming language — starting with **JavaScript (Fetch API)** and optionally **Python (requests)**.

---

## 🚀 Why Call APIs with Code?

Using Postman is great for testing, but in real-world apps, we **use code** to call APIs automatically.

When your app loads user data, submits a form, or fetches weather info — it’s making an API call using code behind the scenes.

---

## 🌐 Example: Calling an API with JavaScript (Using `fetch`)

Let’s use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) test API to get a user's info.

### ▶️ JavaScript (Browser or Frontend Example)

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())  // parse JSON
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });
```

### 🔍 What's happening?

* `fetch(...)` sends a **GET request**
* `.then(response => response.json())` parses the JSON from the response
* `.then(data => {...})` handles the usable data
* `.catch(...)` handles errors

---

## 💡 Output:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}
```

---

## 🐍 Bonus: Calling an API with Python (`requests`)

Here’s the same example in Python, using the popular `requests` library.

### ▶️ Python Example

```python
import requests

response = requests.get('https://jsonplaceholder.typicode.com/users/1')

if response.status_code == 200:
    data = response.json()
    print("User Data:", data)
else:
    print("Error:", response.status_code)
```

### 🔍 What’s happening?

* `requests.get(...)` sends a GET request
* `response.json()` gives the parsed JSON data
* We check `status_code` to make sure it worked

---

## 🧠 Summary

* APIs can be called using **code**, not just tools like Postman
* In **JavaScript**, use `fetch()` or Axios (later)
* In **Python**, use the `requests` library
* Always handle:

  * The **response data**
  * The **status code**
  * **Errors** if something goes wrong

---

## 🧪 Practice Challenge

Write a short script in **JavaScript** or **Python** to:

* Fetch post #1 from `https://jsonplaceholder.typicode.com/posts/1`
* Print the title and body

Want me to review or help you write your answer?

---

### ✅ Module 2 Complete!

You now understand:

* How HTTP and APIs work together
* How to explore APIs using Postman
* How to call APIs using real code


