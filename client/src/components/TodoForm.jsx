import React from 'react';
import { IoMdSend } from "react-icons/io";


function TodoForm() {
  return (
    <div className="box py-7 px-4 md:w-[60%] w-full border bg-white shadow-lg shadow-left shadow-right shadow-top shadow-bottom rounded-lg">
    <div className="flex w-full  ">
      <input className="border-2 mx-3 w-full p-3 rounded-md " placeholder="enter ToDo" type="text" />
      <span className='bg-blue-800 rounded-[4px] me-4 box hover:scale-90 duration-300 ease-in-out cursor-pointer flex items-center p-4'>
        <IoMdSend color='white' size={20}/>
      </span>
    </div>
  </div>
  )
}

export default TodoForm