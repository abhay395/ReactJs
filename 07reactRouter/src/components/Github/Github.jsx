import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/abhay395')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data)
    //     setData(data)
    //   })
    // },[data])
    return (
        <div className="text-center m-4 bg-gray-600 p-4 text-3xl" >Github followers :{data.followers} 
        <img  src={data.avatar_url} alt="gitPicture" width={"200px"} />
        </div>
    )
}

export default Github

//ise kaam ke liye ek alag folder bana fayde mand rhataa hai
export const githubInfoLoder=async()=>{
   const res= await fetch('https://api.github.com/users/abhay395')
   return res.json()
}