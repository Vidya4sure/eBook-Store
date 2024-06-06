import React from 'react'
import {Routes , Route} from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBooks from './pages/EditBooks'
import Home from './pages/Home'
import ShowBooks from './pages/ShowBooks'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books/create' element={<CreateBooks/>}></Route>
      <Route path='/books/edit/:id' element={<EditBooks/>}></Route>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}></Route>
      <Route path='/books/details/:id' element={<ShowBooks/>}></Route>
    </Routes>
    </div>
  )
}

export default App
