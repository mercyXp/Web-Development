
---

## 🟢 Flask Forms and Handling User Input (GET & POST)

---

### 📌 What You’ll Learn

* How to create a simple **HTML form**
* How Flask handles form submissions using **GET** and **POST**
* How to collect and display user input

---

### 📝 Step 1: Create a Form Page

In your `templates/` folder, create a file called:

```
form.html
```

Add this form inside it:

```html
{% extends 'base.html' %}

{% block title %}User Form{% endblock %}

{% block content %}
  <h1>Enter Your Name</h1>
  <form method="POST" action="/greet">
    <input type="text" name="username" placeholder="Your name">
    <button type="submit">Submit</button>
  </form>
{% endblock %}
```

---

### 🧠 What’s Happening?

* `<form method="POST">` tells the browser to send the data to the server (not in the URL).
* `name="username"` is the key Flask will use to grab the input.
* `action="/greet"` means the form will go to the `/greet` route after submitting.

---

### 🐍 Step 2: Add Flask Routes in `app.py`

In your `app.py`, add this:

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', user="Mercy")

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/greet', methods=['POST'])
def greet():
    name = request.form['username']
    return render_template('greet.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
```

---

### 📄 Step 3: Create `greet.html`

Create this file in your `templates/` folder:

```html
{% extends 'base.html' %}

{% block title %}Greeting{% endblock %}

{% block content %}
  <h1>Hello, {{ name }}! 👋</h1>
  <p>Nice to meet you!</p>
{% endblock %}
```

---

### 🧪 Try It Out

1. Run your Flask app:

   ```bash
   python app.py
   ```

2. Go to [http://127.0.0.1:5000/form](http://127.0.0.1:5000/form)

3. Enter your name and hit **Submit**

✅ You’ll be redirected to a **greeting page** with your name displayed!

---

### 💬 What’s the Difference Between GET and POST?

| Method | Where is data sent?                    | Use when...                     |
| ------ | -------------------------------------- | ------------------------------- |
| GET    | In the URL (e.g. `/search?query=test`) | Searching or bookmarking        |
| POST   | In the body (hidden)                   | Sending sensitive or large data |

---

### ✅ Summary

| Concept            | Description                           |
| ------------------ | ------------------------------------- |
| `<form>`           | Lets the user input data              |
| `request.form`     | Reads form data in Flask              |
| `methods=['POST']` | Allows Flask to receive POST requests |

---

### ✅ Challenge

1. Create another form (e.g. "Tell us your favorite color")
2. Display the result on a new page
3. Add basic form validation (e.g., make sure the input isn’t empty)

---


