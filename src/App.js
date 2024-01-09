import React from 'react'
import { Route, Routes } from 'react-router'
import New from './New'
import Newa from './Newa'

function App() {
  return (
    <div>
      {/* <h1>ap</h1> */}
      <Routes>
        <Route path='/' element={<Newa/>}></Route>
        <Route path='/ne' element={<New/>}></Route>

      </Routes>
    </div>
  )
}

export default App