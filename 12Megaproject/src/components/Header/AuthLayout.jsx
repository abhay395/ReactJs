 import React ,{useState,useEffect}from "react";
 import {useSelector} from 'react-redux'
 import {useNavigate} from 'react-router-dom'
 export default function Protected({childern,autthentication=true}){
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)
    useEffect(()=>{
        //TODO: make it more easy to understand
        if (autthentication && authStatus!==autthentication) {
            navigate('/login')
        } else if (!autthentication && authStatus!== autthentication ){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,autthentication])
    return loader?<h1>Loading...</h1>:<>{childern}</>
 }