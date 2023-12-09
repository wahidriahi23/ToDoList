import React from 'react'
import ToDo from './ToDo'
import {Routes,Route} from 'react-router-dom'
import List from './List'

const App = () => {
  return (
    <div>
      <Routes>
         <Route  path ="/"  element ={<ToDo/>}/>
         <Route path ="/List"  element ={<List/>}/>
      </Routes>
      
    </div>
  )
}

export default App
