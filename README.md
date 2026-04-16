# API Testing 

## About this repository

This repository is a starter project for learning API testing.

It contains a small Todo API with basic CRUD-style endpoints. The project is intentionally kept simple so that you can first run the API, understand the endpoint behavior, and then gradually set up and write automated API tests during the lecture.


---

## Features

- Get all todos
- Get a todo by id
- Create a new todo
- Delete a todo
- Simple in-memory data for easy testing

---

## Tech stack

- Node.js
- Express
- JavaScript

---

## Project structure

```text
testing-api-with-mocha-chai/
├── src/
│   ├── data/
│   │   └── todos.js
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

---

## Setup instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd testing-api-with-mocha-chai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

### 4. Open the API

After the server starts, open:

* `http://localhost:3000/`
* `http://localhost:3000/todos`

---

## Note

Mocha, Chai, and Supertest are not pre-configured in this repository. They will be added step by step during the lecture.

---

## API documentation

### Base URL

```text
http://localhost:3000
```

---

### 1. Health / Welcome Route

#### Endpoint

```http
GET /
```

#### Description

Returns a welcome response to confirm that the API is running.

#### Success response

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Welcome to the Todo API"
}
```

---

### 2. Get All Todos

#### Endpoint

```http
GET /todos
```

#### Description

Returns all todo items available in memory.

#### Success response

**Status Code:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn Express",
      "completed": false
    },
    {
      "id": 2,
      "title": "Write API tests",
      "completed": false
    }
  ]
}
```

---

### 3. Get Todo by ID

#### Endpoint

```http
GET /todos/:id
```

#### Description

Returns a single todo item based on the provided id.

#### Path parameter

* `id` → numeric id of the todo

#### Example request

```http
GET /todos/1
```

#### Success response

**Status Code:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false
  }
}
```

#### Error response

**Status Code:** `404 Not Found`

```json
{
  "success": false,
  "message": "Todo not found"
}
```

---

### 4. Create a New Todo

#### Endpoint

```http
POST /todos
```

#### Description

Creates a new todo item and returns the created object.

#### Request body

```json
{
  "title": "Practice Mocha and Chai"
}
```

#### Rules

* `title` is required
* `title` must be a non-empty string

#### Success response

**Status Code:** `201 Created`

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": 3,
    "title": "Practice Mocha and Chai",
    "completed": false
  }
}
```

#### Error response

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Title is required"
}
```

---

### 5. Delete Todo by ID

#### Endpoint

```http
DELETE /todos/:id
```

#### Description

Deletes the todo item matching the given id.

#### Path parameter

* `id` → numeric id of the todo

#### Example request

```http
DELETE /todos/1
```

#### Success response

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Todo deleted successfully",
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false
  }
}
```

#### Error response

**Status Code:** `404 Not Found`

```json
{
  "success": false,
  "message": "Todo not found"
}
```

---

## Available endpoints summary

* `GET /`
* `GET /todos`
* `GET /todos/:id`
* `POST /todos`
* `DELETE /todos/:id`

---

## Learning purpose

This project can be used to practice:

* Express route creation
* working with request and response objects
* status codes
* JSON response structure
* API testing with Mocha
* assertions with Chai
* endpoint testing with Supertest
* positive and negative test cases

---

## Notes

* This project uses in-memory data, so restarting the server resets the todo list.
* The project is intentionally kept small and simple for teaching and practice.
* It is a good starter project for learning API development and API testing together.

