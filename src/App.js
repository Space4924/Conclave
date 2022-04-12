import React from 'react'

import Form from './Form'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (<> 
<Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/Form' element={<Form/>}></Route>

</Routes>
  
  </>)
}

export default App
