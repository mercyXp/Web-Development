"""
from flask import Flask

app = Flask(__name__)

# Homepage route
@app.route('/')
def home():
    return "🏠 Welcome to the Homepage!"

# About page route
@app.route('/about')
def about():
    return "ℹ️ This is the About Page."

# Contact page route
@app.route('/contact')
def contact():
    return "📞 Contact us at: hello@example.com"
# Services page route
@app.route('/services')
def service():
    return "We offer web development and consulting!"

if __name__ == '__main__':
    app.run(debug=True)
    
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return "<h2>About Page</h2>"

if __name__ == '__main__':
    app.run(debug=True)