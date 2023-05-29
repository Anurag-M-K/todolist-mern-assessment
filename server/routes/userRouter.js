const express = require("express");
const { signup ,login } = require("../controllers/userController");
const { verifyJWT } = require("../middleware/authMiddleware");
const { addTodos, getTodos, deleteTodo ,editTodo} = require("../controllers/todoController")
const router = express.Router()



router.post("/signup",signup)

router.post("/login",login)


// POST /todos
router.post('/todos',verifyJWT, addTodos);

// GET /todos
router.get('/todos',verifyJWT, getTodos);


// DELETE /todos/:id
router.delete('/todos/:id',verifyJWT, deleteTodo);

  
  // PUT /todos/:id
  router.put('/edit-todo/:id',verifyJWT ,editTodo);
  

module.exports = router;