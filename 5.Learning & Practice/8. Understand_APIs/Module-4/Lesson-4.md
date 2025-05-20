
---
## 📘Lesson 4: Protecting Routes with Authentication in Flask

## 🧠 Learning Objective

Learn how to protect specific API routes in Flask using a simple **token-based authentication** check.

---

## 🔐 Why Protect Routes?

Sometimes you only want **authorized users** to access parts of your API, such as:

* `/api/admin` → Only accessible to users with a valid token
* `/api/profile` → Should show info only if the user is logged in

In Flask, we can add simple checks to **verify tokens** before giving access.

---

## 🧱 Step-by-Step: Add Token Authentication to Your API

We’ll simulate token-based authentication. In real apps, you'd verify against a database or identity provider.

### 🔧 1. Define a Fake Token

Add this to the top of your `app.py`:

```python
AUTH_TOKEN = "mysecrettoken123"
```

---

### 🔒 2. Create a Protected Route

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

AUTH_TOKEN = "mysecrettoken123"

@app.route('/api/protected', methods=['GET'])
def protected_route():
    auth_header = request.headers.get('Authorization')

    if auth_header == f"Bearer {AUTH_TOKEN}":
        return jsonify({"message": "Access granted to protected route."})
    else:
        return jsonify({"error": "Unauthorized"}), 401
```

---

### ✅ 3. Test with Postman

1. Set method to `GET`
2. URL: `http://localhost:5000/api/protected`
3. Under **Headers**, add:

   * **Key**: `Authorization`
   * **Value**: `Bearer mysecrettoken123`

✅ You’ll get:

```json
{
  "message": "Access granted to protected route."
}
```

❌ If the token is missing or wrong:

```json
{
  "error": "Unauthorized"
}
```

---

## 💡 Bonus: Use a Decorator for Reusability

To reuse this check on many routes, define an `@require_auth` decorator:

```python
from functools import wraps

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if auth_header != f"Bearer {AUTH_TOKEN}":
            return jsonify({"error": "Unauthorized"}), 401
        return f(*args, **kwargs)
    return decorated
```

Then apply it to routes:

```python
@app.route('/api/secret-data')
@require_auth
def secret_data():
    return jsonify({"message": "Secret data unlocked!"})
```

---

## 🧠 Summary

* You can protect routes in Flask by checking the `Authorization` header
* Use the `Bearer` pattern to simulate token-based authentication
* Decorators make it easy to reuse logic across multiple routes

---

## 🧪 Quick Practice

**Try This:**
Create a new protected route `/api/settings` and only allow access with the correct token. Use the `@require_auth` decorator to protect it.

---

