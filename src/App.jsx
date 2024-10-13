import React from 'react';
import Todo from './Components/Todo';
import { TodolistProvider } from './Components/Store'; 
import List from './Components/list';

const App = () => {
  return (
    <>
      <div className="flex flex-col md:w-[500px] mx-auto w-[90%]">
        <TodolistProvider> 
          <Todo />
          <List />
        </TodolistProvider>
      </div>
    </>
  );
}

export default App;
