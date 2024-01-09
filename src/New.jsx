import React, { useContext } from 'react'
import { addcontext } from './ContextShare'
import { useNavigate } from 'react-router'

function New() {
    const navigate = useNavigate()
    const {addthings,setaddthings}=useContext(addcontext)
    const handleset = ()=>{
      setaddthings("hello")
      navigate('/')
    }
  return (
    <div>New
        <button onClick={handleset}>set</button>
    </div>
  )
}

export default New