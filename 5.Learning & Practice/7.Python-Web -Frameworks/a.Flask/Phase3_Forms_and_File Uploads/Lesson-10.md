
---
## 🟢 Flash Messages – Showing Success or Error Alerts

---

### 📌 What You’ll Learn

* What **flash messages** are
* How to show **temporary alerts** (e.g., “Form submitted!”)
* How to style them using CSS

---

### 💬 What is a Flash Message?

A **flash message** is a one-time alert you show to the user after an action — like submitting a form or logging in.

Examples:

* ✅ “Login successful”
* ❌ “Please fill in all fields”
* 🚫 “Access denied”

Flask makes it super easy!

---

### 🔧 Step 1: Set a Secret Key in `app.py`

Flash messages need a **secret key** to work:

```python
from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = 'supersecret123'  # Needed for flashing
```

---

### 🧾 Step 2: Update the Form to Use Flash

Let’s flash a message when someone submits the form.

Update your `/greet` route:

```python
@app.route('/greet', methods=['POST'])
def greet():
    name = request.form['username']

    if not name:
        flash("Name is required!")
        return redirect('/form')

    flash(f"Hello, {name}! Welcome 🎉")
    return render_template('greet.html', name=name)
```

🧠 `flash(...)` stores a temporary message
🧠 `redirect(...)` sends the user back to the form if needed

---

### 🖼️ Step 3: Display Flash Messages in `base.html`

Add this snippet **inside `<body>`**, just below the navbar:

```html
{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul class="flash-messages">
      {% for message in messages %}
        <li>{{ message }}</li>
      {% endfor %}
    </ul>
  {% endif %}
{% endwith %}
```

---

### 🎨 Step 4: Style Flash Messages in `style.css`

Add this to your `static/style.css`:

```css
.flash-messages {
  list-style: none;
  padding: 10px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  margin: 10px auto;
  width: 80%;
  text-align: center;
  border-radius: 5px;
}
```

---

### 🧪 Try It Out

1. Run your Flask app.
2. Go to [http://127.0.0.1:5000/form](http://127.0.0.1:5000/form)
3. Submit an empty form ➝ ⚠️ You’ll see: “Name is required!”
4. Submit a name ➝ 🎉 You’ll see: “Hello, Mercy! Welcome 🎉”

---

### ✅ Summary

| Feature                  | Purpose                        |
| ------------------------ | ------------------------------ |
| `flash(message)`         | Store a one-time message       |
| `get_flashed_messages()` | Show messages in the next view |
| `redirect('/form')`      | Redirect after flash           |
| `app.secret_key`         | Required to use `flash()`      |

---

### ✅ Challenge

1. Create a new form (e.g., "Contact Us") with name + message fields
2. Use `flash()` to:

   * Show a success message if filled correctly
   * Show a warning if anything is missing

---


