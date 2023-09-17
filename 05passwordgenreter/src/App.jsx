import { useState ,useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length, setlenth] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharAllow]=useState(false)
  const[Password,setpassword]=useState('')


  //use Ref Hook
  const passwordRef=useRef(null)

  const passwordGernerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!@#$%^&*(){}[]:;'/?.<>,~*-+"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,numberAllowed,characterAllowed,setpassword])
 const  copypasswordToClipboar=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(Password)
 })


  useEffect(()=>{
    passwordGernerator()
  },[length,numberAllowed,characterAllowed,passwordGernerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-orange-500 bg-slate-800'>
    <h1 className='text-white text-center py-2'>Password generator</h1>
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4' >
        <input type="text"
        value={Password}
        className='outline-none w-full py-1 px-3' 
        placeholder='password' 
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copypasswordToClipboar}
        className='bg-blue-900 text-white px-3 py-2.3 shrink-0 outline-none text-sm' >copy</button>
      </div>
      <div className='flex text-sm gap-x-2' >
        <div className='flex items-center gap-x-1' >
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlenth(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox" 
          defaultChecked={characterAllowed}
          id='charinput'
          onChange={()=>{
            setCharAllow((prev)=>!prev)
          }}
          />
          <label >Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
