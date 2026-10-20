import { Card } from "../Components/Card";
import { peliculas } from "../Data/pelis";
export const Home = () => {
  return (
    <div className="pb-8 dark:bg-blue-950">
      <section className="relative mx-auto min-h-72  overflow-hidden bg-slate-900 md:min-h-96">
        <img
          src="https://i.pinimg.com/736x/61/67/79/616779ccd881b9605d2bcafbd02a7c72.jpg"
          alt="imagen de mi vecino totoro"
          className="absolute inset-0 h-full w-full object-fill opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative flex min-h-72 items-end px-6 py-8 md:min-h-96 md:px-12 md:py-12">
          <div className="max-w-xl text-white">
            <p className="text-2xl">Tu proxima historia comienza aqui</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              Descubre peliculas con gran animacion de japon
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Explora nuestra selección y encuentra algo nuevo para ver hoy.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-8">
        <div className="mb-6">
          <p className="font-mono text-sm uppercase tracking-widest text-black-500 dark:text-blue-50">
            selecion de la semana
          </p>
          <h2 className="mt-2 text-3xl font-bold text-black dark:text-blue-50">
            Peliculas destacadas
          </h2>
          <p className="mt-2 text-lg text-black-800 dark:text-blue-50">
            Peliculas para un dia especial
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {peliculas.map((pelicula) => (
            <Card key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </section>
    </div>
  );
};
