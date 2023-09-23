import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import{removeTodo} from '../features/todo/todoSlice'
function Todo() {
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch()
  return (
    <div>
       {todos.map((todo)=>(
        <li className='list-none bg-gray-400 my-1 w-36' key={todo.id} >
          {todo.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))} className='px-2' >X</button>
        </li>
       ))}
    </div>
  )
}

export default Todo
