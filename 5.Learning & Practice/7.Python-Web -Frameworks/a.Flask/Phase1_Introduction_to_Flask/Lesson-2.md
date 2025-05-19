
---

## 🟢 ** Installing Flask and Running Your First App**

---

### 🧰 What You Need

Before we begin, make sure you have the following:

* ✅ Python installed (version 3.7 or higher recommended)
* ✅ A code editor (like VS Code)
* ✅ Internet connection (to install Flask)

---

### 📦 Step 1: Create a Project Folder

```bash
mkdir flask-hello
cd flask-hello
```

This creates a folder for your Flask project and moves you into it.

---

### 🐍 Step 2: Create a Virtual Environment (Optional but Recommended)

```bash
python -m venv venv
```

Then activate it:

* **Windows:**

  ```bash
  venv\Scripts\activate
  ```

* **Mac/Linux:**

  ```bash
  source venv/bin/activate
  ```

---

### 🌐 Step 3: Install Flask

Run this in your terminal:

```bash
pip install flask
```

Once it's installed, check with:

```bash
flask --version
```

You should see something like `Flask 3.x.x`.

---

### 📝 Step 4: Create Your First Flask File

Inside the `flask-hello` folder, create a file called:

```
app.py
```

Paste this code inside:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World! This is my first Flask app."

if __name__ == '__main__':
    app.run(debug=True)
```

---

### 🚀 Step 5: Run the App

In your terminal, run:

```bash
python app.py
```

You’ll see something like:

```
* Running on http://127.0.0.1:5000/
```

Click that link or open your browser and go to:

👉 [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

You should see:

```
Hello, World! This is my first Flask app.
```

🎉 You just ran your first Flask website!

---

### 🛠️ What Just Happened?

| Line                      | What it does                                        |
| ------------------------- | --------------------------------------------------- |
| `from flask import Flask` | Brings in Flask tools                               |
| `app = Flask(__name__)`   | Creates the web app                                 |
| `@app.route('/')`         | Sets the homepage route                             |
| `def home()`              | This runs when someone visits the homepage          |
| `app.run(debug=True)`     | Starts the Flask server with live-reload on changes |

---

