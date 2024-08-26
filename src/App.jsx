import React from 'react'
import TodoList from './components/TodoList'
import ListItems from './components/ListItems'

const App = () => {
  return (
    <div className='bg-slate-500 h-screen w-full flex justify-center items-center'>
       <TodoList />
       {/* <ListItems /> */}
    </div>
  )
}

export default App