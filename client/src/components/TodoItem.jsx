import React, { useState } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

function TodoItem({ todos , setTodos, handleEdit }) {
  const [isRotating, setIsRotating] = useState(false);

  const handleDelete = async (todo) => {
    try {
      // Make an API call to delete the todo
      const token = localStorage.getItem('token'); // Get the token from localStorage
      const config = {
        headers: {
          Authorization: token, // Add the token to the headers
        },
      };

      // Send a DELETE request to the server
      setIsRotating(true);

      const res = await axios.delete(`http://localhost:8080/api/todos/${todo._id}`, config);
      const response = await axios.get('http://localhost:8080/api/todos', config);
      setTodos(response.data.todos);  
      setIsRotating(false);

      // Perform any additional actions after successful deletion (e.g., update the state or display a success message)
      console.log("Todo deleted:", todo);
    } catch (error) {
      console.log(error);
      // Handle error case if deletion fails (e.g., display an error message)
    }
  };


  const handleEditClick = () => {
    handleEdit(todo); // Pass the todo item to the handleEdit function
  };

  return (
    <div className="box p-5 md:w-[60%] w-full border-2 bg-white shadow-lg rounded-lg mb-5">
      <h3 className='text-2xl font-medium'>The Todos:</h3>
      {todos?.map((todo, i) => (
        <div key={i} className="border-2 border-gray-300 my-5 p-4 rounded-md grid grid-cols-4">
          <div className="col-span-3">
            <h3 className='font-medium text-[20px]'>{todo?.todo}</h3>
          </div>
          <TodoList isRotating={isRotating} todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} />
          <div>
            <p>Author:</p>
            <p>Added: {todo?.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
