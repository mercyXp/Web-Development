
---

## 📘 Lesson 2: How APIs Handle Requests and Responses

## 🧠 Learning Objective

Understand the full lifecycle of an API interaction — from sending a request to processing and returning a response — and learn what’s happening behind the scenes.

---

## 🔄 The API Request-Response Cycle

Every time your app talks to an API, it follows a **cycle** like this:

```
[ Client (You) ]
      ↓
 Send HTTP Request
      ↓
[ API Server (Backend) ]
      ↓
 Process Request, Access Data
      ↓
 Send HTTP Response
      ↓
[ Client (You) ]
```

Let’s break this cycle down step by step.

---

## 📨 Step 1: Sending the Request

The **client** sends a request to an **API endpoint** using a specific **HTTP method** (e.g. GET, POST).

### Example Request:

```http
GET /users/1 HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer your_token_here
```

* **GET** = Method (you’re asking to fetch data)
* **/users/1** = Endpoint (you want user #1’s info)
* **Authorization** = Optional header for access control

> Tools like **Postman**, your **browser**, or even a **mobile app** can send this request.

---

## ⚙️ Step 2: Server Processes the Request

Once the server receives the request, it does the following:

1. **Validates the request**

   * Checks for a valid URL, correct headers, and required permissions.
2. **Parses input data** (if provided)

   * Especially for POST, PUT, or PATCH requests.
3. **Interacts with the database or backend system**

   * Looks up or modifies data based on your request.

---

## 📬 Step 3: Returning a Response

Once the server completes its task, it sends back a **response** that includes:

* **Status Code**: Tells whether the operation succeeded.
* **Headers**: Extra information (e.g., type of content).
* **Body** (optional): The actual data being returned, usually in **JSON**.

### Example JSON Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

## 🧪 Real Example: Request + Response

### 👇 Client Sends Request:

```http
GET https://api.example.com/users/1
```

### ☁️ Server Processes:

* Verifies if user ID `1` exists
* Retrieves user data from the database

### 👆 Server Responds:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

## 🚨 Common Status Codes Recap

| Code | Meaning      | When You See It                          |
| ---- | ------------ | ---------------------------------------- |
| 200  | OK           | Data retrieved successfully              |
| 201  | Created      | New resource was added                   |
| 400  | Bad Request  | Your input data is incorrect             |
| 401  | Unauthorized | You’re not allowed (maybe missing token) |
| 404  | Not Found    | The resource doesn’t exist               |
| 500  | Server Error | Something broke on the backend           |

---

## 💡 Tip: Always Check the Status Code

Before trying to use the data, always look at the **status code**. It tells you if the request worked or failed, and why.

---

## 🧠 Summary

* An API interaction includes **sending a request**, **processing it on the server**, and **receiving a response**.
* Requests include a **method**, **URL**, **headers**, and (sometimes) a **body**.
* Responses include a **status code**, **headers**, and often a **JSON body** with data.
* Understanding this cycle is crucial for troubleshooting and building apps that talk to APIs.

---

