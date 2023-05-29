import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const getTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/todos', config);
      console.log("response ",response)
      setTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log("from alll ",todos)

  return (
    <div className='lg:px-44 px-5 flex flex-col justify-center gap-y-4 items-center'>
      <Navbar />
      <TodoForm setTodos={setTodos} />
      <TodoItem setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default TodoList;
