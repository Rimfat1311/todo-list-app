import React, { useEffect, useRef, useState } from 'react';
import ListItems from './ListItems';
import img from '../assets/images/img.png';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return; 
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      )
    );
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className='bg-slate-300 mx-auto w-full sm:w-1/2 md:w-1/3 h-[500px] flex flex-col text-slate-700 rounded-xl p-5 sm:p-7'>
      <div className='flex items-center mb-5 gap-2'>
        <img className='w-8 h-8' src={img} alt="ToDo list icon" />
        <h1 className='text-3xl sm:text-4xl font-bold'>ToDo-list</h1>
      </div>
      <div className='flex items-center my-5 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add to list'
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-slate-700 text-white text-lg font-medium cursor-pointer w-24 sm:w-32 h-12'
        >
          Add +
        </button>
      </div>
      <div className='flex-grow overflow-y-auto'>
        {todoList.map((item) => (
          <ListItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
