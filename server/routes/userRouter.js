const express = require("express");
const { signup ,login } = require("../controllers/userController");
const { verifyJWT } = require("../middleware/authMiddleware");
const { addTodos, getTodos, deleteTodo } = require("../controllers/todoController")
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
  router.put('/todos/:id', (req, res) => {
    // Implementation for updating a specific todo in MongoDB
    res.send(`PUT /todos/${req.params.id}`);
  });
  

module.exports = router;