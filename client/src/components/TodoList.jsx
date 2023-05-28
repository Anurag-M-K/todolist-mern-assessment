import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

function TodoList() {
  return (
    <div className="border-2 grid md:grid-cols-3 grid-cols-1 items-center   ">
      <span className="text-gray-500 flex justify-center cursor-pointer m-1 md:m-0">
        <BsFillCheckCircleFill size={20} />
      </span>
      <span className="text-blue-600 flex justify-center cursor-pointer border-t-2 md:border-t-0 md:border-l-2 border-l-0  md:border-r-2 border-r-0 m-1 md:m-0">
        <HiPencil size={24} />
      </span>
      <span className="text-red-600 flex justify-center cursor-pointer border-t-2 md:border-t-0     m-1 md:m-0">
        <MdDelete size={24} />
      </span>
    </div>
  );
}

export default TodoList;
