
---
## 📘 Lesson 3: Exploring APIs with Postman

## 🧠 Learning Objective

Learn how to use **Postman** to send requests, explore APIs, and inspect responses without writing any code.

---

## 🛠️ What is Postman?

**Postman** is a free API client that lets you **send HTTP requests** and **see responses** — perfect for learning, debugging, and working with APIs.

> Think of Postman as a browser for APIs: instead of loading websites, it loads and tests data from endpoints.

### ✅ Why use Postman?

* No coding required
* Easy to send GET, POST, PUT, DELETE requests
* Visualizes responses clearly (JSON, XML, HTML)
* Lets you test APIs before writing code

---

## 🧭 Installing Postman

You can use either:

1. **Web version**: [https://web.postman.co](https://web.postman.co)
2. **Desktop app** (recommended): Download from [https://www.postman.com/downloads](https://www.postman.com/downloads)

No signup is needed to start testing public APIs.

---

## 🧪 Let's Try It: Your First API Request in Postman

We'll use a **free public API** to test.
Example: `https://jsonplaceholder.typicode.com/users/1`

### Step-by-Step:

1. **Open Postman**
2. In the top bar:

   * Select **GET** as the method
   * Enter this URL:

     ```
     https://jsonplaceholder.typicode.com/users/1
     ```
3. Click **Send**
4. See the response below (JSON data):

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}
```

---

## 💡 Understanding the Request

* **GET** = You're retrieving data.
* **URL** = The endpoint (in this case, a fake user from a sample API).
* **Headers** = Optional (used for things like authentication).
* **Body** = Not needed for GET, but used in POST/PUT requests.

---

## 🔁 Try a POST Request

Now let’s create (simulate) a user.

### 1. Change method to **POST**

### 2. Use this URL:

```
https://jsonplaceholder.typicode.com/users
```

### 3. Go to the **Body** tab → Select **raw** → Choose **JSON**

### 4. Paste this JSON:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### 5. Click **Send**

### ✅ You'll get a response like:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "id": 11
}
```

> The fake API pretends to create a user and gives it an ID.

---

## 🧠 Summary

* **Postman** is a great tool to explore and test APIs.
* You can send requests like **GET**, **POST**, **PUT**, and **DELETE** easily.
* You can inspect:

  * The **request** (method, URL, headers, body)
  * The **response** (status code, headers, and data)

---

## 🧪 Try It Yourself!

### Use Postman to:

* Send a **GET** request to:
  `https://jsonplaceholder.typicode.com/posts/1`
* Send a **DELETE** request to:
  `https://jsonplaceholder.typicode.com/posts/1`
  (It won’t actually delete anything — it’s a fake API!)

---

