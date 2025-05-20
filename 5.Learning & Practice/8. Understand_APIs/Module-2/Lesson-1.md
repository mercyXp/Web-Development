
---
## 📘Lesson 1: HTTP Basics and Methods

## 🧠 Learning Objective

Understand the fundamentals of **HTTP**, the protocol that APIs use to communicate, and learn about the common HTTP methods.

---

## 🗂️ Overview of HTTP

### What is HTTP?

**HTTP** stands for **Hypertext Transfer Protocol**. It is the foundation of data communication on the web. When an API is called, HTTP is the protocol that allows the **client** (such as your browser or app) to send a request to the **server**, and for the server to return a response.

> Think of HTTP like a set of rules for how to request and transfer data between systems.

---

## 🌐 The Anatomy of an HTTP Request

An **HTTP request** is made up of several parts. Here’s a simple breakdown:

1. **Request Line**

   * Contains the **method** (GET, POST, etc.), the **URL** (Uniform Resource Locator), and the **HTTP version** (e.g., HTTP/1.1).

   Example:

   ```http
   GET /users/1 HTTP/1.1
   ```

2. **Headers**

   * Metadata that provides additional information (like authentication, content type, etc.).

   Example:

   ```http
   Content-Type: application/json
   Authorization: Bearer YOUR_TOKEN_HERE
   ```

3. **Body (optional)**

   * The content being sent with the request (used mainly with POST or PUT requests).

   Example:

   ```json
   {
     "name": "John Doe",
     "email": "johndoe@example.com"
   }
   ```

---

## 🏗️ HTTP Methods (HTTP Verbs)

In APIs, **HTTP methods** (or verbs) are used to define the action that the client wants to take on a resource. Here are the most common methods:

### 1️⃣ **GET**

**Purpose:** Retrieve data from the server.
**When to use:** When you want to **fetch** data without making changes.

> Example: Retrieving user information.

```http
GET /users/1
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

### 2️⃣ **POST**

**Purpose:** Send data to the server to **create** a new resource.
**When to use:** When you want to **add** data to the server (e.g., creating a new user).

> Example: Sending new user data to create an account.

```http
POST /users
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "janesmith@example.com"
}
```

**Response:**

```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "janesmith@example.com"
}
```

---

### 3️⃣ **PUT**

**Purpose:** **Update** an existing resource on the server.
**When to use:** When you want to replace or update the data of a resource (e.g., editing a user profile).

> Example: Updating user details.

```http
PUT /users/1
Content-Type: application/json

{
  "name": "John Doe",
  "email": "newemail@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "newemail@example.com"
}
```

---

### 4️⃣ **DELETE**

**Purpose:** **Delete** a resource from the server.
**When to use:** When you want to **remove** data from the server (e.g., deleting a user).

> Example: Deleting a user.

```http
DELETE /users/1
```

**Response:**
A **204 No Content** status means the resource was deleted successfully without returning any content.

---

### 5️⃣ **PATCH**

**Purpose:** Partially update a resource.
**When to use:** When you want to **update a part** of a resource, not the whole thing.

> Example: Updating just the user’s email.

```http
PATCH /users/1
Content-Type: application/json

{
  "email": "updatedemail@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "updatedemail@example.com"
}
```

---

## 🌍 HTTP Status Codes

When an API sends a response, it also includes a **status code** to indicate the outcome of the request. These codes are three-digit numbers, divided into five categories.

1. **1xx – Informational**

   * **100 Continue**: The request is being processed.
2. **2xx – Success**

   * **200 OK**: The request was successful.
   * **201 Created**: A new resource was created.
3. **3xx – Redirection**

   * **301 Moved Permanently**: The resource has been permanently moved.
   * **302 Found**: The resource is temporarily located elsewhere.
4. **4xx – Client Error**

   * **400 Bad Request**: The request was malformed.
   * **401 Unauthorized**: The request lacks valid authentication.
   * **404 Not Found**: The resource could not be found.
5. **5xx – Server Error**

   * **500 Internal Server Error**: The server encountered an error.
   * **503 Service Unavailable**: The server is currently unavailable.

---

## 🧠 Summary

* **HTTP** is the foundation of communication between clients and servers.
* **HTTP Methods** like GET, POST, PUT, DELETE, and PATCH are used to define the actions on data.
* **Status Codes** tell you whether the request was successful or encountered an error.

---




