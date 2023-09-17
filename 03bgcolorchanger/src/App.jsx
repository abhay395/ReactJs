import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState('olive')

  return (
 <div className="w-full h-screen duration-300 "
 style={{backgroundColor:color}}
 >
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap justify-center
    gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button onClick={()=>setColor('Red')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'Red'}}>Red</button>
      <button onClick={()=>setColor('green')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'green'}}>green</button>
      <button onClick={()=>setColor('white')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'white'}}>white</button>
      <button onClick={()=>setColor('blue')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'blue'}}>blue</button>
      <button onClick={()=>setColor('orange')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'orange'}}>orange</button>
      <button onClick={()=>setColor('olive')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'olive'}}>olive</button>
      <button onClick={()=>setColor('black')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'black' ,color:'white'}}>black</button>
      <button onClick={()=>setColor('brown')} className='outlin-none px-4 rounded-xl shadow-lg' style={{backgroundColor:'brown'}}>brown</button>

    </div>
  </div>
 </div>
  )
}

export default App
