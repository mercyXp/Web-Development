
---

## 📘Lesson 2: Creating Your First API Endpoint

## 🧠 Learning Objective

Learn how to create an API endpoint that returns structured **JSON** data, making it usable by clients like web apps or mobile apps.

---

## 📄 What You’ll Build

You’ll create an endpoint at `/api/user` that returns information about a user in **JSON format**:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 🛠️ Step-by-Step Instructions

### 🔁 Step 1: Update your `app.py`

Let’s add an API route that returns a **JSON object**.

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome to your first API!'

@app.route('/api/user', methods=['GET'])
def get_user():
    user = {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    }
    return jsonify(user)

if __name__ == '__main__':
    app.run(debug=True)
```

---

### ▶️ Step 2: Run the App

Make sure your virtual environment is activated, then run:

```bash
python app.py
```

Open your browser or Postman and go to:
[http://127.0.0.1:5000/api/user](http://127.0.0.1:5000/api/user)

✅ You should see:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 💬 Understanding the Code

* `@app.route('/api/user', methods=['GET'])`
  → Defines a **GET endpoint** at `/api/user`

* `jsonify(...)`
  → Converts your Python dictionary into proper **JSON format** with the correct content-type header

* The returned JSON is exactly what a client app would consume

---

## 🧪 Optional Practice: Add More Endpoints

Try adding a few more routes:

```python
@app.route('/api/product', methods=['GET'])
def get_product():
    product = {
        "id": 101,
        "name": "Notebook",
        "price": 4.99
    }
    return jsonify(product)
```

Then visit:
[http://127.0.0.1:5000/api/product](http://127.0.0.1:5000/api/product)

---

## 🧠 Summary

* You learned how to create a real **JSON API endpoint** using Flask
* The `jsonify()` function formats data correctly for API responses
* This sets the foundation for building APIs that return dynamic or database-powered data

---

## ✅ Quick Challenge

Create an endpoint `/api/status` that returns:

```json
{
  "status": "API is running",
  "version": "1.0"
}
```

---

