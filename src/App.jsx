import { Route, Routes } from 'react-router'
import { Nabar } from './Components/Nabar'
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'

function App() {

  return (
    <>
    <Nabar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
    </>
  )
}

export default App
