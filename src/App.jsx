import { Route, Routes, Navigate } from "react-router";
import { Nabar } from "./Components/Nabar";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Footer } from "./Components/Footer";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { DetallePeli } from "./pages/DetallePeli";
import { Error404 } from "./pages/Error404";
import { Dashboard } from "./Components/Dashboard";
import { Admin } from "./pages/Admin";
import { AdminUsuarios } from "./pages/AdminUsuarios";
import { useState } from "react";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

function App() {
  const [user, setuser] = useState({
    name: "Lautaro",
    role: "admin",
  });
  console.log(user);

  const isAllowed = user.role === "admin";

  console.log(!!isAllowed);

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

            <Route
              path="/admin"
              element={<ProtectedRoutes user={user} isAllowed={isAllowed} />}
            >
              <Route element={<Dashboard />}>
                <Route index element={<Admin />} />
                <Route path="usuarios" element={<AdminUsuarios />} />
              </Route>
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
