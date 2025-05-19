
---

## 🟢 Lesson 3: Routing and Making More Pages

---

### 📌 What is Routing?

**Routing** in Flask is how you tell your app what to show when someone visits a specific URL.

For example:

* `/` → Homepage
* `/about` → About Page
* `/contact` → Contact Page

Each route is connected to a **function** that tells Flask what to display.

---

### 🏗️ How to Create Multiple Routes

Let's update your `app.py` to add more pages:

```python
from flask import Flask

app = Flask(__name__)

# Homepage route
@app.route('/')
def home():
    return "🏠 Welcome to the Homepage!"

# About page route
@app.route('/about')
def about():
    return "ℹ️ This is the About Page."

# Contact page route
@app.route('/contact')
def contact():
    return "📞 Contact us at: hello@example.com"

if __name__ == '__main__':
    app.run(debug=True)
```

---

### 🧪 Test the Routes

Start your Flask app:

```bash
python app.py
```

Then visit these in your browser:

| URL                             | What you see    |
| ------------------------------- | --------------- |
| `http://127.0.0.1:5000/`        | 🏠 Homepage     |
| `http://127.0.0.1:5000/about`   | ℹ️ About page   |
| `http://127.0.0.1:5000/contact` | 📞 Contact page |

---

### 🧠 What's Happening?

| Part                   | Meaning                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `@app.route('/about')` | Tells Flask: if someone visits `/about`, run the function below |
| `def about():`         | This function runs when that URL is visited                     |
| `return`               | Sends a response (text or HTML) back to the browser             |

---

### 💡 Pro Tip: URLs Must Be Unique

You can't have two routes with the same name like this:

```python
@app.route('/')
def one():
    return "Page One"

@app.route('/')
def two():
    return "Page Two"  # ❌ This will overwrite the first one
```

---

### 🧠 Summary

* Each URL path needs a matching route in Flask.
* A **route** points to a **function** that returns what the browser should see.
* You can create as many routes as you like!

---

### ✅ Challenge

Try adding a new route `/services` that says:

```
🛠️ We offer web development and consulting!
```




