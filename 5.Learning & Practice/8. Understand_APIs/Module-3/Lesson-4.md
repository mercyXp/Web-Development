
---
## 📘Lesson 4: Creating a Simple CRUD API

## 🧠 Learning Objective

Learn how to build a complete API that can **Create**, **Read**, **Update**, and **Delete** data using Flask — the core of most real-world APIs.

---

## 📦 What is CRUD?

| Operation | HTTP Method | Purpose                | Example             |
| --------- | ----------- | ---------------------- | ------------------- |
| Create    | POST        | Add new data           | Create a new user   |
| Read      | GET         | Retrieve existing data | Get user by ID      |
| Update    | PUT / PATCH | Modify existing data   | Edit a user’s email |
| Delete    | DELETE      | Remove data            | Delete a user by ID |

We’ll continue using our `users` list as a fake database.

---

## 🧱 Start with the Existing Code

Let’s continue from where we left off:

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Fake database
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]
```

---

## 1️⃣ READ (All Users & Single User)

```python
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
```

---

## 2️⃣ CREATE (POST)

```python
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        "id": len(users) + 1,
        "name": data["name"],
        "email": data["email"]
    }
    users.append(new_user)
    return jsonify(new_user), 201
```

---

## 3️⃣ UPDATE (PUT)

```python
@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        user["name"] = data.get("name", user["name"])
        user["email"] = data.get("email", user["email"])
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
```

---

## 4️⃣ DELETE

```python
@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        users = [u for u in users if u["id"] != user_id]
        return jsonify({"message": f"User {user_id} deleted."})
    else:
        return jsonify({"error": "User not found"}), 404
```

---

## 🧪 Test Your API

You can use **Postman** or **curl** to test:

* `GET /api/users` → list all users
* `GET /api/users/1` → fetch one user
* `POST /api/users` → create user
* `PUT /api/users/1` → update user
* `DELETE /api/users/1` → delete user

---

## 🧠 Summary

You’ve now created a **fully functional CRUD API**:

* `GET` for reading data
* `POST` for creating new records
* `PUT` for updating records
* `DELETE` for removing data

🎉 This is the foundation of nearly every modern web or mobile backend!

---

## ✅ Optional Challenge

Enhance the API to include basic **input validation**:

* Return a `400 Bad Request` if the `name` or `email` is missing in a `POST` request.

---


