
---
## 🟢 Saving Data – Using JSON Files in Flask**

---

### 📌 What You’ll Learn

* How to **store user input** in a JSON file
* How to **read from and write to files** in Flask
* A beginner alternative to using a database

---

### 🗃️ Why Use JSON?

Before you learn databases like SQL, you can save data to a `.json` file — it’s like a simple “database” made of text.

Example content of `data.json`:

```json
[
  {
    "name": "Mercy",
    "message": "I love Flask!"
  }
]
```

---

### 🧾 Step 1: Create a “Contact Us” Form

In `templates/contact.html`:

```html
{% extends 'base.html' %}

{% block title %}Contact Us{% endblock %}

{% block content %}
  <h2>Contact Us</h2>
  <form method="POST" action="/contact">
    <input type="text" name="name" placeholder="Your name"><br><br>
    <textarea name="message" placeholder="Your message"></textarea><br><br>
    <button type="submit">Send</button>
  </form>
{% endblock %}
```

---

### 🐍 Step 2: Add Flask Route in `app.py`

Add this to your routes:

```python
import json
import os

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        message = request.form.get('message')

        if not name or not message:
            flash("All fields are required!")
            return redirect('/contact')

        # Save the data to a file
        data = {"name": name, "message": message}

        if os.path.exists("data.json"):
            with open("data.json", "r") as file:
                messages = json.load(file)
        else:
            messages = []

        messages.append(data)

        with open("data.json", "w") as file:
            json.dump(messages, file, indent=2)

        flash("Message sent successfully!")
        return redirect('/contact')

    return render_template('contact.html')
```

---

### 🧪 Step 3: Test It

1. Run your Flask app
2. Go to: [http://localhost:5000/contact](http://localhost:5000/contact)
3. Submit a name + message
4. Check your project folder — it will create a file called `data.json` with the saved info!

---

### 📖 Bonus: Read and Display Saved Messages

In your `app.py`, add:

```python
@app.route('/messages')
def messages():
    if os.path.exists("data.json"):
        with open("data.json", "r") as file:
            messages = json.load(file)
    else:
        messages = []
    return render_template('messages.html', messages=messages)
```

Create `templates/messages.html`:

```html
{% extends 'base.html' %}

{% block title %}All Messages{% endblock %}

{% block content %}
  <h2>Messages</h2>
  <ul>
    {% for m in messages %}
      <li><strong>{{ m.name }}</strong>: {{ m.message }}</li>
    {% endfor %}
  </ul>
{% endblock %}
```

---

### ✅ Summary

| Feature            | Purpose                  |
| ------------------ | ------------------------ |
| `json.dump()`      | Write to JSON file       |
| `json.load()`      | Read from JSON file      |
| `os.path.exists()` | Check if a file exists   |
| `POST` form        | Submits user data        |
| `flash()`          | Confirms success/failure |

---

### ✅ Challenge

1. Add email field to the form and store it too.
2. Show the latest message at the top of the list.
3. Let users view `/messages` and see all submitted entries.

---

