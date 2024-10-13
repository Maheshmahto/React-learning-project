import React, { useContext, useState } from "react";
import { todo } from "./Store";

const List = () => {
  const { todolist, deleteTodo } = useContext(todo);

  return (
    <>
      {todolist.map((item) => (
        <div
          className="flex justify-between w-[100%] rounded-md items-center p-3 bg-gray-50 py-2 my-2"
          key={item.id}
        >
          <h2>{item.inputTodo}</h2>
          <h1>{item.date}</h1>
          <button
            className="bg-red-700 px-3 py-1 rounded-lg text-white"
            onClick={() => deleteTodo(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default List;
