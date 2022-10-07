import React from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate() 
  useEffect(() => {
  setTimeout(()=>{
    navigate("/",{state: "Error Not Page"}) 
  },1000)
},[navigate])
    return <h1>NotFound</h1>

}

export default NotFound