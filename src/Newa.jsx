import React, { useContext } from 'react'
import { addcontext } from './ContextShare'

function Newa() {
    const {addthings,setaddthings}=useContext(addcontext)

  return (
    <div>Newa
        {addthings}
    </div>
  )
}

export default Newa