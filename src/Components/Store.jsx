import React, { createContext, useReducer, useEffect } from "react";

export const todo = createContext({
  todolist: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodolistReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          inputTodo: action.payload.inputTodo,
          date : new Date().toLocaleDateString(),
        },
      ];
    case "delete":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const TodolistProvider = ({ children }) => {
  
  const [todolist, dispatchTodolist] = useReducer(
    TodolistReducer,
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  const addTodo = (inputTodo) => {
    dispatchTodolist({
      type: "add",
      payload: {
        inputTodo,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatchTodolist({
      type: "delete",
      payload: {
        id,
      },
    });
  };

  return (
    <todo.Provider
      value={{
        todolist,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </todo.Provider>
  );
};
