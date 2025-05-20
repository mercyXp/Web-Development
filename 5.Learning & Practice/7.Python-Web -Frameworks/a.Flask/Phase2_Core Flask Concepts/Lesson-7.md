
---

## 🟢  Creating a Navigation Bar and Reusable Layout with Jinja `extends`

---

### 📌 What You’ll Learn

* How to avoid repeating the same HTML on every page
* How to create a **base layout** using Jinja's `extends` and `block`
* How to add a **navigation bar** to all your pages

---

### 🧱 Why Use a Base Layout?

Instead of repeating this in every file:

```html
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  ...content...
</body>
</html>
```

You create a **base.html**, then have each page **extend** it and only write what’s different.

---

### 🗂️ Step 1: Create `base.html` in `templates/`

```html
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}My Site{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>

  <!-- Navigation Bar -->
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/contact">Contact</a>
  </nav>

  <hr>

  <!-- Page Content -->
  {% block content %}
  {% endblock %}

</body>
</html>
```

---

### 🧾 Step 2: Update `home.html` to Use `base.html`

```html
{% extends 'base.html' %}

{% block title %}Home Page{% endblock %}

{% block content %}
  <h1>Hello, {{ user }}!</h1>
  <p>This is the homepage.</p>
{% endblock %}
```

🧠 `extends` says: "Use everything in base.html"
🧠 `block content` says: "This is the content I want to insert into the base"

---

### 🧾 Step 3: Create Another Page (Optional)

**about.html**

```html
{% extends 'base.html' %}

{% block title %}About Us{% endblock %}

{% block content %}
  <h1>About Us</h1>
  <p>This is the about page for our awesome site.</p>
{% endblock %}
```

---

### 🐍 Step 4: Update Your `app.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', user="Mercy")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return "<h2>Contact Page Coming Soon!</h2>"

if __name__ == '__main__':
    app.run(debug=True)
```

---

### 💡 Optional: Style the Navbar (in `style.css`)

```css
nav {
  background-color: #4CAF50;
  padding: 10px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
```

---

### ✅ Summary

| Feature         | Purpose                            |
| --------------- | ---------------------------------- |
| `base.html`     | Main layout used by all pages      |
| `{% extends %}` | Lets a page use the base           |
| `{% block %}`   | Insert custom content in a section |
| `nav`           | Navigation menu                    |

---

### ✅ Challenge

1. Create a `contact.html` page that also extends `base.html`
2. Add more navigation links if you want (e.g., `/services`, `/blog`)
3. Style the navbar however you like!

---


