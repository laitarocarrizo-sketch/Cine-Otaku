import { Route, Routes } from "react-router";
import { Nabar } from "./Components/Nabar";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Footer } from "./Components/Footer";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { DetallePeli } from "./pages/DetallePeli";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <Nabar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Detallepeli/:id" element={<DetallePeli />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Registro />} />
            <Route path="/*" element={<Error404/>}/>
          </Routes>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
