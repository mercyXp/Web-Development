
---
## 📘Lesson 1: Introduction to Flask and Project Setup

## 🧠 Learning Objective

Understand what **Flask** is and how to set up your computer to build and run a basic API locally.

---

## 🛠️ What Is Flask?

**Flask** is a lightweight Python web framework used to build web applications and APIs. It’s perfect for beginners because:

* It's simple and easy to learn
* It requires minimal setup
* It lets you focus on learning how APIs work

> Think of Flask as a toolbox that helps you turn your Python code into a working web service.

---

## ⚙️ Step 1: Install Python

If you haven’t already installed Python:

* Download from [https://python.org](https://www.python.org/downloads/)
* Make sure to check **“Add Python to PATH”** during installation

Check installation by running:

```bash
python --version
```

You should see something like:

```
Python 3.x.x
```

---

## ⚙️ Step 2: Create a Project Folder

1. Create a new folder for your project:

```bash
mkdir my-first-api
cd my-first-api
```

2. Create a virtual environment (recommended):

```bash
python -m venv venv
```

3. Activate the virtual environment:

* On Windows:

  ```bash
  venv\Scripts\activate
  ```
* On Mac/Linux:

  ```bash
  source venv/bin/activate
  ```

---

## ⚙️ Step 3: Install Flask

Inside your virtual environment, run:

```bash
pip install flask
```

Confirm installation:

```bash
pip show flask
```

---

## 📄 Step 4: Create Your First Flask App

1. Create a new file called `app.py`:

```bash
touch app.py  # or just create it manually
```

2. Add this code inside:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, Flask! This is your first API.'

if __name__ == '__main__':
    app.run(debug=True)
```

---

## ▶️ Step 5: Run Your Flask App

In your terminal, run:

```bash
python app.py
```

You’ll see something like:

```
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser. You should see:

```
Hello, Flask! This is your first API.
```

🎉 Congratulations — you've just built and launched your first web API endpoint!

---

## 🧠 Summary

* Flask is a lightweight framework used to build APIs with Python.
* You set up a Python project, installed Flask, and created a simple app.
* The route `/` returns a message — this is your first **API endpoint**.

---

## ✅ Quick Exercise

Modify your `app.py` file to add another route:

```python
@app.route('/about')
def about():
    return 'This is a simple API built with Flask.'
```

Then visit [http://127.0.0.1:5000/about](http://127.0.0.1:5000/about) to see it in action.

---


