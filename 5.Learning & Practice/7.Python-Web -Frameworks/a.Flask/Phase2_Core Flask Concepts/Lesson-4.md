
---

## 🟢 Using HTML Templates with Flask (Jinja2)

---

### 📌 Why Use Templates?

So far, you've been returning **plain text** like this:

```python
return "Hello!"
```

But real websites use **HTML** to show headings, buttons, links, images, etc.

Flask uses a system called **Jinja2** to handle HTML templates.

---

### 🧱 Step 1: Create a `templates` Folder

Create a folder named:

```
templates
```

Flask looks inside this folder by default when using `render_template()`.

---

### 📝 Step 2: Create an HTML File

Inside the `templates` folder, create a file named:

```
home.html
```

Add this simple HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Flask Site</title>
</head>
<body>
  <h1>🏠 Welcome to My Website</h1>
  <p>This is the homepage using an HTML template.</p>
</body>
</html>
```

---

### 🐍 Step 3: Update Your `app.py`

Now we’ll use `render_template()` from Flask.

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return "<h2>About Page</h2>"

if __name__ == '__main__':
    app.run(debug=True)
```

Now, when you go to:

👉 `http://127.0.0.1:5000/`

You will see your **HTML** file being rendered!

---

### 🧠 What is `render_template()`?

It’s a special Flask function that:

* Looks for your HTML files in the `templates/` folder
* Sends them to the browser when requested
* Allows Python data to be added later (we’ll learn this soon)

---

### 📂 Folder Structure Recap

```bash
/flask-hello
│
├── app.py
└── /templates
    └── home.html
```

---

### 💡 Bonus: Add More Pages

You can create more HTML files like:

* `about.html`
* `contact.html`

Then update your `app.py`:

```python
@app.route('/about')
def about():
    return render_template('about.html')
```

---

### ✅ Challenge

1. Create a new template called `about.html`
2. Add a heading like: `<h1>About Us</h1>`
3. Update your Flask route to use this new template

---

### ✅ Summary

* Flask uses the **Jinja2** engine to load HTML from the `templates/` folder.
* You can show real web pages using `render_template('filename.html')`.

---


