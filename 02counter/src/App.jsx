

function App() {
  const addvalue=()=>{
    console.log('clicked',counter)
   counter++;
  setCounter(counter)
  }
  // let counter=5 
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addvalue}>Add value{counter}</button>
    <br />
    <button>Remove value{counter}</button>
    </>
  )
}

export default App
 