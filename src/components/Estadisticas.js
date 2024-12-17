import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Estadisticas = () => {
  const datos = [
    { numero: 29, texto: "Instructores galardonados" },
    { numero: 15, texto: "Ganador/a nacional en competencias" },
    { numero: 2, texto: "Instructores profesionales" },
    { numero: 259, texto: "Estudiantes de Ballroom" },
  ];

  // Hook de react-intersection-observer para detectar cuándo el componente es visible
  const { ref, inView } = useInView({
    threshold: 0.6, // Se activa cuando el 30% del componente es visible
    triggerOnce: true, // La animación se dispara solo una vez
  });

  return (
    <div ref={ref} className="bg-gray-900 text-white py-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        {datos.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center space-y-2"
          >
            <h2 className="text-5xl font-bold text-primary">
              {inView && <CountUp start={0} end={item.numero} duration={2} />}+
            </h2>
            <p className="text-xl">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estadisticas;
