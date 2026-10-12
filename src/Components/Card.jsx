export const Card = ({pelicula}) => {
  return (
    <article className="my-4 max-w-80 overflow-hidden rounded-2xl bg-cyan-500  text-slate-950 shadow-lg">
        <img src={pelicula.imagen} 
        alt={pelicula.titulo}
        className="h-56 w-full object-cover"
        />
        <h3 className="p-4 text-xl font-bold">
            {pelicula.titulo}
        </h3>
        <p className="px-4 pb-4 text-sm">
          {pelicula.descripcion} 
        </p>
    </article>
  );
};
