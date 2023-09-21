import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const handleSubmit=(e)=>{
    // e.preventDefault()
    setUser({username,Password})
    }
    const [username,setusername]=useState('')
    const [Password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    
    return (
       <div>
        
        <input type="text" value={username} onChange={(e)=>{
            setusername(e.target.value)
        }} placeholder='username'  />
        <input type="text" value={Password} onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder='Password'  />
        <button onClick={handleSubmit}>Submit</button>
        
       </div> 
    )
}

export default Login
