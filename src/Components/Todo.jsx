import React, { useContext, useRef } from "react";
import List from "./list";
import { todo } from "./Store";
const Todo = () => {
  const inputTodoElement = useRef();
  const {todolist, addTodo, deleteTodo,}=useContext(todo)

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const inputTodo = inputTodoElement.current.value;
    addTodo(inputTodo);
    inputTodoElement.current.value="";
  };
  return (
    <>
      <form onSubmit={handleOnsubmit} className="w-[100%]">
        {/* <div className="flex items-center justify-center h-screen "> */}
        <div className="text-center mb-6">
          <h1 className="font-semibold md:font-bold  text-white text-3xl py-6 ">
            Todo List
          </h1>
          <div className="flex items-center justify-between gap-7">
            <input
              type="text"
              placeholder="  Add a new task"
              className=" px-3 py-2 my-4 w-[100%] rounded-md   placeholder:p-2 bg-white active:border-[0px]"
              ref={inputTodoElement}
            />

            <div>
              <button className=" px-3 py-2 rounded-md bg-sky-400 text-white hover:bg-sky-600 cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* </div> */}
      </form>
    </>
  );
};

export default Todo;
