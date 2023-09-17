import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    userName:'Abhay',
    age:21
  }
  let myArray=['ak','abhay','kuldeep']
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
     <Card userName='Reality' btnText='click me ' />
     <Card userName='Abhay' />

    </>
  )
}

export default App
