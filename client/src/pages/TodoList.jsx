import React from 'react'
import Navbar from '../components/Navbar'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

function TodoList() {
  return (
    <div className='lg:px-44 px-5 flex flex-col justify-center gap-y-4 items-center'>
    <Navbar/>
    <TodoForm/>
    <TodoItem/>
  </div>
  )
}

export default TodoList