# To-Do Application

This is a simple To-Do application built with Node.js, Express, and MongoDB. It allows you to create, retrieve, and delete to-do items.


### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

The application will start running on http://127.0.0.1:8000.

API Endpoints:

The application provides the following API endpoints:

  Create a To-Do

    URL: POST /api/v1/todos

    Example: http://127.0.0.1:8000/api/v1/todos

    Description: This endpoint allows you to create a new to-do item.

  Request Body:

    {
    "text": "Sample To-Do",
      }
  
  Retrieve All To-Dos:

    URL: GET /api/v1/todos
    Example: http://127.0.0.1:8000/api/v1/todos
    Description: This endpoint retrieves all to-do items from the database.

  Delete a To-Do by ID:

    URL: DELETE /api/v1/todos/:id
    Example: http://127.0.0.1:8000/api/v1/todos/66a0bc15c17389f3fb0c662a
    Description: This endpoint deletes a to-do item by its ID.

  Built With:

    Node.js
    Express
    MongoDB
    Mongoose

  Author:

    Sai Kumar Mysa - https://github.com/SaikumarMysa
