
---

## 🟢 Adding CSS and Images with Flask’s `static/` Folder

---

### 📌 What You’ll Learn

* How to add **CSS** for styling your pages
* How to show **images**
* How to use Flask’s `static/` folder to serve files

---

### 🗂️ Flask Folder Structure

When using **static files** (like CSS, images, or JavaScript), Flask looks for them inside a folder named:

```
static
```

So your project should now look like this:

```bash
/flask-hello
│
├── app.py
├── /templates
│   └── home.html
└── /static
    ├── style.css
    └── image.jpg
```

---

### 🎨 Step 1: Add a CSS File

1. Inside your `static/` folder, create a file called:

```
style.css
```

2. Add this simple CSS:

```css
body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #4CAF50;
}

p {
  font-size: 18px;
}
```

---

### 🔗 Step 2: Link the CSS File in HTML

Edit your `home.html` to link the CSS:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
  <h1>Hello, {{ user }}!</h1>
  <p>Welcome to your personalized Flask page.</p>
</body>
</html>
```

🧠 `url_for('static', filename='style.css')` tells Flask:
"Get this file from the `static/` folder."

---

### 🖼️ Step 3: Add an Image

1. Place an image in your `static/` folder.
   Name it something like: `image.jpg`

2. Update your HTML to display it:

```html
<img src="{{ url_for('static', filename='image.jpg') }}" alt="Sample Image" width="300">
```

You should now see your image on the page.

---

### 🧪 Run and Test

Start your Flask app:

```bash
python app.py
```

Then open [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

✅ You’ll see:

* Styled background and fonts
* Green heading
* Your image

---

### ✅ Summary

| Tool                                | Purpose                   |
| ----------------------------------- | ------------------------- |
| `static/` folder                    | Stores CSS, JS, images    |
| `url_for('static', filename='...')` | Loads static files        |
| CSS                                 | Makes your site look nice |
| `<img>`                             | Shows images in HTML      |

---

### ✅ Challenge

1. Add your own image to the `static/` folder
2. Create a new page with different CSS (e.g. `about.html`)
3. Practice using multiple styles (font size, color, etc.)

---


