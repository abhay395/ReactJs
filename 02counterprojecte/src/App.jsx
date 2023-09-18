import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCunter]=useState(1)

  // let counter=15

 const addvalue=()=>{
  // counter++
  if(counter>=20){
    counter=20
  }else{
    setCunter(counter+1)
  }
 }
 const removeValue=()=>{
  if(counter<=0){
    counter=0
  }else{
    setCunter(counter-1)
  }
 }
  // let counter=5
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>coountervalue:{counter}</h2>
   <button onClick={addvalue} >Add value{counter}</button><br />
   <button onClick={removeValue}>remove value {counter}</button>
   </>
  )
}

export default App
