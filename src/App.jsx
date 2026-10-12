import { Route, Routes } from 'react-router'
import { Nabar } from './Components/Nabar'
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
    <section className="min-h-screen flex flex-col">
    <Nabar/>
    <main className="grow">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
    </main>
    <Footer/>
    </section>
    </>
  )
}

export default App
