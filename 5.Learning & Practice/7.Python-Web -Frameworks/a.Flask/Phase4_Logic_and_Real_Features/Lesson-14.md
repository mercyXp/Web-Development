## 🟠 Using Loops in Jinja Templates

---

### 📌 What You’ll Learn

* How to loop through data in your Flask templates
* Display a list of files, names, messages, etc.
* Combine Python logic and HTML using **Jinja2** syntax

---

### 🧠 What Is Jinja2?

Flask uses **Jinja2**, a template engine. It lets you:

* Add Python-like logic (`if`, `for`, etc.)
* Insert dynamic data with `{{ ... }}`
* Control the page with `{% ... %}`

---

## 🐍 Step 1: Pass a List to a Template

In your `app.py`:

```python
@app.route('/names')
def show_names():
    people = ["Mercy", "Amina", "John", "Zama"]
    return render_template("names.html", people=people)
```

---

## 🧾 Step 2: Create `templates/names.html`

```html
{% extends "base.html" %}

{% block title %}People List{% endblock %}

{% block content %}
  <h2>List of Names</h2>
  <ul>
    {% for person in people %}
      <li>{{ person }}</li>
    {% endfor %}
  </ul>
{% endblock %}
```

### What’s Happening:

* `people` is the list you passed
* `{% for person in people %}` loops through it
* `{{ person }}` shows each item

---

## 🖼️ Step 3: Show All Uploaded Files (Real Example)

```python
@app.route('/gallery')
def gallery():
    files = os.listdir(app.config['UPLOAD_FOLDER'])
    return render_template("gallery.html", files=files)
```

In `templates/gallery.html`:

```html
{% extends "base.html" %}

{% block title %}File Gallery{% endblock %}

{% block content %}
  <h2>Uploaded Files</h2>
  <ul>
    {% for file in files %}
      <li><a href="{{ url_for('uploaded_file', filename=file) }}">{{ file }}</a></li>
    {% else %}
      <p>No files uploaded yet.</p>
    {% endfor %}
  </ul>
{% endblock %}
```

---

## ✅ Summary

| Feature     | Example                          |
| ----------- | -------------------------------- |
| Loop        | `{% for item in list %}`         |
| Output      | `{{ item }}`                     |
| Empty list? | Use `{% else %}` to handle it    |
| URL builder | `url_for('route', filename=...)` |

---

### 🧠 Challenge

1. Create a list of dictionaries like:

   ```python
   files = [
     {"name": "image1.jpg", "type": "Image"},
     {"name": "doc1.pdf", "type": "PDF"}
   ]
   ```
2. Loop through and display each file and type in a table.

---

