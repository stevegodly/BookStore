import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Show from './pages/Show'
import Edit from './pages/Edit'
import Delete from './pages/Delete'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='books/create' element={<Create/>}/>
      <Route path='books/deatails/:id' element={<Show/>}/>
      <Route path='books/edit/:id' element={<Edit/>}/>
      <Route path='books/delete/:id' element={<Delete/>}/>
    </Routes>
  )
}

export default App