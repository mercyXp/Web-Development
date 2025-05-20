
---

## 🟠 Using Python Logic in Views

---

### 📌 What You’ll Learn

* How to use `if`, `else`, and `elif` in your Flask views
* How to make decisions based on:

  * User input
  * File names or types
  * Any condition inside a route

---

### 🔍 Why It Matters

Real apps don’t just display one thing — they **respond differently** depending on what happens.
This lesson helps you:

* Show different pages for different users
* Handle special file types differently
* Customize output based on data

---

### 🧠 Basics of `if` Statements in Python

```python
name = "Mercy"

if name == "Mercy":
    print("Hello, Mercy!")
else:
    print("Who are you?")
```

You can do the same **inside Flask routes**.

---

### 🐍 Step 1: Example Route With Conditions

In `app.py`:

```python
@app.route('/hello/<username>')
def greet_user(username):
    if username.lower() == 'admin':
        return "Welcome, Admin!"
    else:
        return f"Hello, {username.capitalize()}!"
```

Now visit:

* `/hello/admin` → you see a special welcome
* `/hello/jane` → you see “Hello, Jane!”

---

### 🧪 Step 2: Use Logic With File Uploads

Let’s say you only want to allow `.txt` files.

```python
@app.route('/text-only', methods=['POST'])
def text_only():
    file = request.files['file']

    if not file.filename.endswith('.txt'):
        return "Only .txt files allowed!"

    content = file.read().decode('utf-8')
    return f"<h2>Text file content:</h2><pre>{content}</pre>"
```

---

### ✅ Summary

| Python Logic               | Use it for…                        |
| -------------------------- | ---------------------------------- |
| `if`                       | Check one condition                |
| `else`                     | Do something if condition is false |
| `elif`                     | Add more options                   |
| `.lower()` / `.endswith()` | Useful string checks               |

---

### 🧠 Practice Task

1. Create a route that takes an age as input in the URL (e.g., `/age/25`)
2. Show:

   * “You are a teen” if under 20
   * “You’re an adult” otherwise

💡 Use this:

```python
@app.route('/age/<int:age>')
def check_age(age):
    if age < 20:
        return "You're a teen!"
    else:
        return "You're an adult!"
```


