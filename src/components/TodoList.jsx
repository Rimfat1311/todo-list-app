import React, { useRef, useState } from 'react';
import ListItems from './ListItems';
import img from '../assets/images/img.png'
const TodoList = () => {
  const [TodoList, setTodoList] = useState([]);
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

  const deleteTodo = (id)=>{
    setTodoList((prvTodo)=>{
     return prvTodo.filter((todo)=> todo.id !== id)
    })
 
  }

  return (
    <div className='bg-slate-300 place-self-center w-1/3 h-[500px] flex flex-col text-slate-700 rounded-xl p-7'>
      <div className='flex items-center m-7 gap-2'>
        {/* Add src to img or remove it if not needed */}
        <img className='w-7' src={img} alt="" />
        <h1 className='text-4xl font-bold'>ToDo-list</h1>
      </div>
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='add to list'
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-slate-700 text-white text-lg font-medium cursor-pointer w-32 h-12'
        >
          add+
        </button>
      </div>
      <div>
        {TodoList.map((item) => (
          <ListItems key={item.id} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
