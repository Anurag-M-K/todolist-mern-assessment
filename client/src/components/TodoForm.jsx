import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function TodoForm({setTodos}) {
  const [isRotating, setIsRotating] = useState(false);
  const initialValues = {
    todo: '',
  };

  const validationSchema = Yup.object({
    todo: Yup.string().required('Todo is required'),
  });
  const handleSubmit = async (values, { resetForm }) => {

    try {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      const config = {
        headers: {
          Authorization: token, // Add the token to the headers
        },
      };
        setIsRotating(true);

      const response = await axios.post('http://localhost:8080/api/todos', values, config);
     const getTodos = await axios.get('http://localhost:8080/api/todos', config);
     setIsRotating(false);

     setTodos(getTodos.data.todos)
      resetForm();
    } catch (error) {
      console.log(error)
    }
  };
  

  return (
    <div className="box py-7 px-4 md:w-[60%] w-full border bg-white shadow-lg shadow-left shadow-right shadow-top shadow-bottom rounded-lg">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="flex w-full">
            <Field
              className="border-2 mx-3 w-full p-3 rounded-md"
              placeholder="Enter ToDo"
              type="text"
              name="todo"
            />
                <button
              type="submit"
              className={`bg-blue-800 rounded-[4px] me-4 box hover:scale-90 duration-300 ease-in-out cursor-pointer flex items-center p-4 ${
                isRotating ? 'rotate' : ''
              }`}
            >
              <IoMdSend color="white" size={20} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TodoForm;
