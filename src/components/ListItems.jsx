import React, { useRef, useState } from 'react'
import check from '../assets/icons/check.png'
import deleteIcon from '../assets/icons/delete.png'

const ListItems = ({ text, id, isComplete, deleteTodo, toggle }) => {

  const [change, setChange] = useState(false)
  const [istext, setText] = useState(text)
  const handleChange = () => {
    setChange(true)
  }
  const handleClick = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setChange(false);
    }
  };
  


  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => { Toggle(id) }} className='flex flex-1 cursor-pointer items-center'>
        <img className='w-7' src={check} alt="" />
        {change ? (
          <input
            type='text'
            value={istext}
            onChange={handleClick}
            onKeyDown={handleKeyDown}
            //   onBlur={handleBlur}
            autoFocus
            className='border p-1'
          />
        ) : (
          <p onClick={handleChange} className='text-slate-700 ml-4 font-[17px]'>
            {istext}
          </p>
        )}
      </div>

      <img onClick={() => { deleteTodo(id) }} className='w-4 cursor-pointer' src={deleteIcon} alt="" />
    </div>
  )
}

export default ListItems