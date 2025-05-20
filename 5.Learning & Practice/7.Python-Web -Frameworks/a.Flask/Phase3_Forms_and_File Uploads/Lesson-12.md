
---
## 🟢 Validating File Types + Displaying Uploaded Images

---

### 📌 What You’ll Learn

* How to allow only specific file types (like `.jpg` or `.png`)
* How to validate uploaded files before saving
* How to show uploaded images on your webpage

---

### ✅ Step 1: Define Allowed File Extensions

At the top of your `app.py`, add:

```python
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
```

---

### 🐍 Step 2: Validate Before Saving the File

Update your `/upload` route to include validation:

```python
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']

        if not file or file.filename == '':
            flash("No file selected!")
            return redirect('/upload')

        if not allowed_file(file.filename):
            flash("Only image files (png, jpg, jpeg, gif) are allowed.")
            return redirect('/upload')

        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        flash(f"File '{filename}' uploaded successfully!")
        return redirect(f'/uploads/{filename}')

    return render_template('upload.html')
```

---

### 🧾 Step 3: Add a Route to Serve Uploaded Files

Right under your routes, add this:

```python
from flask import send_from_directory

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
```

Now, uploaded files can be viewed at `/uploads/filename.jpg`

---

### 🖼️ Step 4: Show Uploaded Image After Upload

Update your upload success redirect to send the user to a new page like `/uploads/filename`.

Create a simple template: `templates/show_image.html`

```html
{% extends 'base.html' %}

{% block title %}Uploaded File{% endblock %}

{% block content %}
  <h2>Here is your uploaded image</h2>
  <img src="{{ url_for('uploaded_file', filename=filename) }}" style="max-width:400px;">
  <p>File name: {{ filename }}</p>
{% endblock %}
```

Modify the return in your route:

```python
return render_template('show_image.html', filename=filename)
```

---

### 🧪 Try It Out

1. Run your app.
2. Upload a `.jpg` or `.png` file.
3. If it's valid, you’ll be redirected to a page showing your uploaded image.
4. If it’s not an image, you'll see an error flash message.

---

### ✅ Summary

| Feature                 | Purpose                           |
| ----------------------- | --------------------------------- |
| `allowed_file()`        | Checks file type by extension     |
| `send_from_directory()` | Serves uploaded file to browser   |
| `url_for()`             | Builds the correct URL for a file |

---

### ✅ Challenge

1. Add an image preview on the upload page before submitting (you’ll need JavaScript for this).
2. Track all uploaded files and display them as a gallery.

---


Here’s **Lesson 12** of your Flask course:

### 📦 File Type Validation + Displaying Uploaded Files

Written in beginner-friendly **Markdown**.

---

# 🧠 Flask for Dummies

## 🟢 **Lesson 12: Validating File Types + Displaying Uploaded Images**

---

### 📌 What You’ll Learn

* How to allow only specific file types (like `.jpg` or `.png`)
* How to validate uploaded files before saving
* How to show uploaded images on your webpage

---

### ✅ Step 1: Define Allowed File Extensions

At the top of your `app.py`, add:

```python
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
```

---

### 🐍 Step 2: Validate Before Saving the File

Update your `/upload` route to include validation:

```python
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']

        if not file or file.filename == '':
            flash("No file selected!")
            return redirect('/upload')

        if not allowed_file(file.filename):
            flash("Only image files (png, jpg, jpeg, gif) are allowed.")
            return redirect('/upload')

        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        flash(f"File '{filename}' uploaded successfully!")
        return redirect(f'/uploads/{filename}')

    return render_template('upload.html')
```

---

### 🧾 Step 3: Add a Route to Serve Uploaded Files

Right under your routes, add this:

```python
from flask import send_from_directory

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
```

Now, uploaded files can be viewed at `/uploads/filename.jpg`

---

### 🖼️ Step 4: Show Uploaded Image After Upload

Update your upload success redirect to send the user to a new page like `/uploads/filename`.

Create a simple template: `templates/show_image.html`

```html
{% extends 'base.html' %}

{% block title %}Uploaded File{% endblock %}

{% block content %}
  <h2>Here is your uploaded image</h2>
  <img src="{{ url_for('uploaded_file', filename=filename) }}" style="max-width:400px;">
  <p>File name: {{ filename }}</p>
{% endblock %}
```

Modify the return in your route:

```python
return render_template('show_image.html', filename=filename)
```

---

### 🧪 Try It Out

1. Run your app.
2. Upload a `.jpg` or `.png` file.
3. If it's valid, you’ll be redirected to a page showing your uploaded image.
4. If it’s not an image, you'll see an error flash message.

---

### ✅ Summary

| Feature                 | Purpose                           |
| ----------------------- | --------------------------------- |
| `allowed_file()`        | Checks file type by extension     |
| `send_from_directory()` | Serves uploaded file to browser   |
| `url_for()`             | Builds the correct URL for a file |

---

### ✅ Challenge

1. Add an image preview on the upload page before submitting (you’ll need JavaScript for this).
2. Track all uploaded files and display them as a gallery.

---


