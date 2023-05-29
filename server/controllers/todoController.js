const  User = require('../model/userModel');

const addTodos = async (req, res) => {
  try {
    const user = res.locals; // Get the authenticated user from the middleware

    // Create a new todo using the request body and user ID
    const newTodo = {
      todo: req.body.todo,
      userId: user._id, // Assign the user ID to the todo
      timestamp: Date.now(),
    };

    // Find the user by their ID
    const foundUser = await User.findById(user._id)
console.log("founduser ",foundUser)
    // Add the new todo to the user's todo list
    foundUser.todos.push(newTodo);

    // Save the updated user
    await foundUser.save();

    res.status(200).json({
      success: true,
      message: 'Todo added successfully',
      todo: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while adding todo',
      error: error.message,
    });
  }
};


const getTodos = async (req, res) => {
  console.log("reached")
  try {
    const user = res.locals; // Get the authenticated user from the middleware

    // Find the user by their ID and populate the todos field
    const foundUser = await User.findById(user._id).populate('todos');

    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      todos: foundUser.todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching todos',
      error: error.message,
    });
  }
};


const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = res.locals._id; // Get the authenticated user from the middleware

    // Find the user by their ID
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    
    // Find the todo by its ID and the associated user ID
    const todoIndex = user.todos.findIndex(todo => todo._id.toString() === todoId);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }

    // Remove the todo from the user's todos array
    user.todos.splice(todoIndex, 1);

    // Save the updated user
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
      deletedTodo: user.todos[todoIndex],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the todo',
      error: error.message,
    });
  }
};


const editTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = res.locals._id;
    const updatedTodo = req.body.todo;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const todo = user.todos.find((t) => t._id.toString() === todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }

    // Update the todo with the new value
    todo.todo = updatedTodo;

    await user.save();

    res.json({
      success: true,
      message: 'Todo updated successfully',
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while updating the todo.' });
  }
}


module.exports = {
  addTodos,
  getTodos,
  deleteTodo,
  editTodo
};
