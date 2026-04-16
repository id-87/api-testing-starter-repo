const express = require("express");
const todos = require("./data/todos");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Todo API",
  });
});

app.get("/todos", (req, res) => {
  res.status(200).json({
    success: true,
    data: todos,
  });
});

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const todo = todos.find((item) => item.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  res.status(200).json({
    success: true,
    data: todo,
  });
});

app.post("/todos", (req, res) => {
  const { title } = req.body;

  if (typeof title !== "string" || title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title: title.trim(),
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    data: newTodo,
  });
});

app.delete("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const todoIndex = todos.findIndex((item) => item.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
    data: deletedTodo,
  });
});

module.exports = app;
