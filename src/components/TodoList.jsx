
import ListItems from './ListItems'
import React, { useRef } from 'react';

const TodoList = () => {

  const inputRef = useRef();

    const add = ()=>{
        const inputText = inputRef.current.value;
    console.log(inputText);
    }





  return (
    <div className=' bg-slate-300 place-self-center w-1/3 h-[500px] flex flex-col text-slate-700 rounded-xl  p-7   '>
      <div className='flex items-center m-7 gap-2'>
        <img src="" alt="" />
        <h1 className='text-4xl font-bold'>ToDo-list</h1>
      </div>
      <div className=' flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add to list' />
        <button onClick={add} className='border-none rounded-full bg-slate-700 text-white text-lg font-medium cursor-pointer w-32 h-12 '>add+</button>
      </div>
      <div>
        <ListItems text="learn coding"/>
        <ListItems  text="learn coding at bluehouse" />
      </div>
      
    </div>
  )
}

export default TodoList