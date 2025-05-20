
---
## 📘Lesson 3: Handling GET and POST Requests

## 🧠 Learning Objective

Understand how to build API endpoints that handle **GET** and **POST** requests — both retrieving data and receiving user input.

---

## 🔁 What’s the Difference?

| Method | Purpose                 | Example Use                      |
| ------ | ----------------------- | -------------------------------- |
| GET    | Retrieve data           | Fetch a list of users            |
| POST   | Send data to the server | Create a new user, submit a form |

---

## ✏️ Let’s Build It Step-by-Step

We’ll build two routes:

1. `GET /api/users` → returns a list of users
2. `POST /api/users` → accepts JSON data and adds a new user

---

## 🧱 Step 1: Set Up a List of Users

Update your `app.py` file:

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Simulated database (just a list for now)
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]
```

---

## 🟢 Step 2: Create a GET Endpoint

```python
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)
```

Now if you visit [http://127.0.0.1:5000/api/users](http://127.0.0.1:5000/api/users), you’ll get:

```json
[
  {"id": 1, "name": "Alice", "email": "alice@example.com"},
  {"id": 2, "name": "Bob", "email": "bob@example.com"}
]
```

---

## 🟠 Step 3: Create a POST Endpoint

```python
@app.route('/api/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    new_user['id'] = len(users) + 1  # Auto-assign new ID
    users.append(new_user)
    return jsonify(new_user), 201  # 201 = Created
```

Now you can use **Postman** or code to send:

**POST** `http://127.0.0.1:5000/api/users`
**Body (JSON)**:

```json
{
  "name": "Charlie",
  "email": "charlie@example.com"
}
```

✅ Response:

```json
{
  "name": "Charlie",
  "email": "charlie@example.com",
  "id": 3
}
```

---

## 🔍 Behind the Scenes

* `request.get_json()` → Gets the JSON body of the incoming request
* `users.append(...)` → Adds the user to your in-memory list
* `return ..., 201` → 201 means "Created" — a successful POST result

---

## ✅ Summary

* **GET requests** retrieve information
* **POST requests** allow clients to **send data** to your API
* Flask makes handling both very straightforward
* You simulated a basic “database” with a Python list

---

## 🧪 Quick Challenge

Add a `GET /api/users/<id>` endpoint to return **just one user by ID**.

Hint:

```python
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
```

---


