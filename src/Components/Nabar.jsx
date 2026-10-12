import { NavLink } from "react-router"

export const Nabar = () => {
  return (
    <header className="bg-gray-800 px-6 py-4 text-white">
        <nav className="flex items-center justify-between">
        <NavLink to={"/"} className="text-3xl font-bold ms-5 mt-3">CinAnime</NavLink>
        <div className="flex gap-2">
          <NavLink to={"/"}className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1">Inicio</NavLink>
          <NavLink to={"Contacto"} href="" className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1">Contacto</NavLink>
          <a href="" className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1">Iniciar Secion</a>
          <a href="" className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1">Registrarse</a>
        </div>
        </nav>
    </header>
  )
}
