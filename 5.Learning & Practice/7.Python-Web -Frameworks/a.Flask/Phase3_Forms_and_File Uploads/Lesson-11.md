
---
## 🟢 File Uploads – Let Users Upload Files

---

### 📌 What You’ll Learn

* How to create a file upload form
* How to access uploaded files in Flask using `request.files`
* How to save uploaded files to your server

---

### 🗃️ Step 1: Update Your Project Structure

Make sure your project has a folder for uploaded files:

```bash
mkdir uploads
```

---

### 🧾 Step 2: Create a File Upload Form

In `templates/upload.html`:

```html
{% extends 'base.html' %}

{% block title %}Upload File{% endblock %}

{% block content %}
  <h2>Upload a File</h2>
  <form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="file" name="file"><br><br>
    <button type="submit">Upload</button>
  </form>
{% endblock %}
```

🧠 The attribute `enctype="multipart/form-data"` is required to upload files!

---

### 🐍 Step 3: Add Upload Logic in `app.py`

Update your Flask routes:

```python
from flask import Flask, render_template, request, redirect, flash
import os

app = Flask(__name__)
app.secret_key = 'uploadsecret'
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']

        if not file or file.filename == '':
            flash("No file selected!")
            return redirect('/upload')

        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        flash(f"File '{file.filename}' uploaded successfully!")
        return redirect('/upload')

    return render_template('upload.html')
```

---

### 🧪 Step 4: Test It

1. Run your Flask app.
2. Visit [http://127.0.0.1:5000/upload](http://127.0.0.1:5000/upload)
3. Choose a file and hit **Upload**.
4. Check the `uploads/` folder — your file will be saved there.

---

### 📁 Bonus: Secure File Uploads (Optional for Now)

In real apps, use `werkzeug.utils.secure_filename()` to avoid dangerous filenames:

```python
from werkzeug.utils import secure_filename
filename = secure_filename(file.filename)
```

---

### ✅ Summary

| Concept                         | What it does                      |
| ------------------------------- | --------------------------------- |
| `request.files['file']`         | Gets uploaded file                |
| `.save()`                       | Saves file to your server         |
| `enctype="multipart/form-data"` | Needed to send files in form      |
| `UPLOAD_FOLDER`                 | Directory to store uploaded files |

---

### ✅ Challenge

1. Allow uploading only `.png` or `.jpg` images.
2. After upload, show the file on the page (if it’s an image).
3. Keep a list of uploaded files and display them.

---


