import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

function TodoList({ todo, handleEdit, handleDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [editTodo, setEditTodo] = useState(null); // Add this state

  const handleDeleteClick = async () => {
    try {
      setIsDeleting(true);
      await handleDelete(todo); // Call the handleDelete function and pass the todo item
      setIsDeleting(false);
    } catch (error) {
      console.log(error);
      setIsDeleting(false);
    }
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="border-2 grid md:grid-cols-3 grid-cols-1 items-center">
      <span className="text-gray-500 flex justify-center cursor-pointer m-1 md:m-0">
        <BsFillCheckCircleFill size={20} />
      </span>
      <span
        className="text-blue-600 flex justify-center cursor-pointer border-t-2 md:border-t-0 md:border-l-2 border-l-0  md:border-r-2 border-r-0 m-1 md:m-0"
        onClick={() => handleEdit(todo)}
      >
        <HiPencil size={24} />
      </span>
      <span
        className={`text-red-600 flex justify-center cursor-pointer border-t-2 md:border-t-0 m-1 md:m-0 ${isDeleting ? 'rotate' : ''}`}
        onClick={handleDeleteClick}
      >
        <MdDelete size={24} />
      </span>
    </div>
  );
}

export default TodoList;
