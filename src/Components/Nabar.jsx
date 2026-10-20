import { useContext } from "react";
import { NavLink } from "react-router";
import { TemaContext } from "../context/TemaContext";

export const Nabar = () => {
  const contextoTema = useContext(TemaContext);

  const { tema, toggleTheme } = contextoTema;

  console.log(tema);

  return (
    <header className="bg-gray-800 px-6 py-4 text-white">
      <nav className="flex items-center justify-between">
        <NavLink to={"/"} className="text-3xl font-bold ms-5 mt-3">
          CinAnime
        </NavLink>
        <div className="flex gap-2">
          <NavLink
            to={"/"}
            className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1"
          >
            Inicio
          </NavLink>
          <NavLink
            to={"Contacto"}
            href=""
            className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1"
          >
            Contacto
          </NavLink>
          <NavLink
            to={"Login"}
            className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1"
          >
            Iniciar Secion
          </NavLink>
          <NavLink
            to={"Register"}
            href=""
            className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1"
          >
            Registrarse
          </NavLink>

          <button className="text-3xl font-bold bg-indigo-700 hover:bg-indigo-600 rounded-xl px-4 py-1" onClick={toggleTheme}>
           
            {
            tema === "light" ? (<>🌙</>) : (<>☀️</>)
            }
          </button>
        </div>
      </nav>
    </header>
  );
};
