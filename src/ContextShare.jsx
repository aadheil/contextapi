import React, { createContext, useState } from 'react'
import New from './New'
import Newa from './Newa'
export const addcontext = createContext()
function ContextShare({children}) {
    const [addthings,setaddthings]=useState()
  return (
    <addcontext.Provider value={{addthings,setaddthings}}>
        {children}
    </addcontext.Provider>
  )
}

export default ContextShare