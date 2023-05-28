import React from 'react'
import TodoList from './TodoList'

function TodoItem() {
  return (
    
    <div class="box  p-5 md:w-[60%] w-full border-2  bg-white shadow-lg  rounded-lg mb-5">
      <h3>the Todos;</h3>
      <div class="border-2 border-gray-300 my-5  p-4 rounded-md grid grid-cols-4">
       <div class="col-span-3">
         <h3>My new todo</h3>
         </div> 
       <TodoList/>
   <div>
          <p>Author:</p>
        <p>Added:</p>
   </div>
      </div>
      
    </div>
  )
}

export default TodoItem