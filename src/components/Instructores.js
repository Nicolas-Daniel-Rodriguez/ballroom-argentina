import React from "react";
import { useInView } from "react-intersection-observer";

const Instructores = () => {
  // Hook para detectar cuando el componente es visible
  const { ref, inView } = useInView({
    threshold: 0.3, // Se activa cuando el 30% del componente es visible
    triggerOnce: true, // Solo se dispara una vez
  });

  // Información de los instructores
  const instructores = [
    {
      nombre: "Cristian Javier Rodríguez",
      especialidad: "Campeón de Ballroom",
      imagen: "https://via.placeholder.com/300x300", // Reemplaza con la URL de tu imagen
      redes: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
      },
    },
    {
      nombre: "Marina Gonzalez",
      especialidad: "Campeona de Ballroom",
      imagen: "https://via.placeholder.com/300x300", // Reemplaza con la URL de tu imagen
      redes: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-16">
      {/* Sección principal */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary text-2xl font-bold">CONOCE A NUESTROS INSTRUCTORES</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Expertos apasionados en la danza</h1>
          <p className="text-primary text-xl text-justify mt-4">
            Presentamos a nuestros talentosos y experimentados instructores de danza, 
            dedicados a ayudar a los estudiantes a alcanzar sus metas.
          </p>
        </div>

        {/* Contenedor de los instructores */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000`}
        >
          {instructores.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={instructor.imagen}
                alt={instructor.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">{instructor.nombre}</h3>
                <p className="text-gray-400 mt-2">{instructor.especialidad}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={instructor.redes.facebook}
                    className="text-gray-400 hover:text-primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href={instructor.redes.twitter}
                    className="text-gray-400 hover:text-primary"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={instructor.redes.youtube}
                    className="text-gray-400 hover:text-primary"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón "Ver más" 
        <div className="text-center mt-12">
          <button className="bg-primary text-gray-900 font-semibold py-2 px-6 rounded hover:bg-cyan-500 transition">
            Ver más
          </button>
        </div>*/}
      </div>
    </div>
  );
};

export default Instructores;
