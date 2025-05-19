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

if __name__ == '__main__':
    app.run(debug=True)