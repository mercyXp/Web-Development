
---

## 🟢 Passing Data to HTML Templates using Jinja2

---

### 📌 What You’ll Learn

* How to send Python variables to your HTML
* How to show dynamic content using **Jinja2** (Flask’s template engine)

---

### 🔁 Why Pass Data?

Sometimes you want your webpage to show **custom information**, like:

* A user's name
* A list of items
* A message from the server

Instead of hardcoding it into HTML, you pass it from Python.

---

### ✏️ Step 1: Update Your Python Route

Edit your `app.py` file:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    name = "Mercy"
    return render_template('home.html', user=name)

if __name__ == '__main__':
    app.run(debug=True)
```

➡️ We’re passing a variable called `user` to the HTML file.

---

### 📝 Step 2: Use the Variable in `home.html`

Edit your `home.html` file inside `templates/`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
</head>
<body>
  <h1>Hello, {{ user }}!</h1>
  <p>Welcome to your personalized Flask page.</p>
</body>
</html>
```

🧠 `{{ user }}` tells Flask:
"Insert the value of the Python variable named `user` here."

---

### 🧪 Try It Out

1. Run your Flask app:

   ```bash
   python app.py
   ```

2. Visit [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
   You should see:

   ```
   Hello, Mercy!
   Welcome to your personalized Flask page.
   ```

---

### 📋 Passing Multiple Variables

You can pass more than one variable:

```python
@app.route('/profile')
def profile():
    name = "Mercy"
    age = 25
    country = "Kenya"
    return render_template('profile.html', name=name, age=age, country=country)
```

And use them in `profile.html`:

```html
<h1>{{ name }}'s Profile</h1>
<p>Age: {{ age }}</p>
<p>Country: {{ country }}</p>
```

---

### 🔁 Bonus: Loop Through a List

```python
@app.route('/skills')
def skills():
    skill_list = ['Python', 'HTML', 'Flask']
    return render_template('skills.html', skills=skill_list)
```

In `skills.html`:

```html
<h2>My Skills</h2>
<ul>
  {% for skill in skills %}
    <li>{{ skill }}</li>
  {% endfor %}
</ul>
```

🧠 `{% ... %}` is for logic like loops and conditionals
🧠 `{{ ... }}` is for displaying variables

---

### ✅ Summary

* Use `render_template()` to send variables to your HTML.
* Use `{{ variable }}` in your HTML to show dynamic content.
* Use `{% for %}` to loop through lists.

---


