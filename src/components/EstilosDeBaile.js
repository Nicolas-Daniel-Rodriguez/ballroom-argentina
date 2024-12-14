import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import pasodoble from './../assets/pasodoble.png';
import tango from './../assets/tango.png';
import tres from './../assets/3.png';
import cuatro from './../assets/4.png';
import cinco from './../assets/5.png';

// DOS GRUPOS DE IMÁGENES
const grupo1 = [pasodoble, tres, cuatro, cinco, tango];
const grupo2 = [cinco, tango, tres, cuatro, pasodoble];

const EstilosDeBaile = () => {
  const [grupoActual, setGrupoActual] = useState(0);
  const [isInView, setIsInView] = useState(false); // ESTADO PARA SABER SI EL COMPONENTE ESTÁ EN VISTA
  const sectionRef = useRef(null); // REFERENCIA AL CONTENEDOR DEL COMPONENTE
  const [progress, setProgress] = useState(0); // ESTADO PARA LA BARRA DE PROGRESO

  // CONFIGURAR INTERSECTION OBSERVER PARA DETECTAR CUANDO EL COMPONENTE ENTRA EN VISTA
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true); // CUANDO ENTRA EN VISTA, CAMBIAR EL ESTADO A TRUE
      }
    }, { threshold: 0.3 });
  
    // Usamos una variable local para la referencia
    const sectionElement = sectionRef.current;
  
    if (sectionElement) {
      observer.observe(sectionElement); // OBSERVAR EL COMPONENTE
    }
  
    // LIMPIAR EL OBSERVER CUANDO EL COMPONENTE SE MONTA O SE DESMONTA
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  

  // CAMBIAR GRUPO CADA 6 SEGUNDOS
  useEffect(() => {
    const interval = setInterval(() => {
      setGrupoActual((prevGrupo) => (prevGrupo === 0 ? 1 : 0));
      setProgress(0); // Reiniciar la barra al cambiar de grupo
    }, 6000); // Cambiar cada 6 segundos

    return () => clearInterval(interval);
  }, []);

  // ANIMAR LA BARRA DE PROGRESO
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + (100 / 6)); // Llenar la barra cada segundo
      }, 1000); // Se incrementa cada segundo
      return () => clearInterval(interval);
    }
  }, [progress]);

  const imagenesAMostrar = grupoActual === 0 ? grupo1 : grupo2;
  const textoGrupo = grupoActual === 0 ? "Latino" : "Standar";

  return (
    <div className="w-full bg-black text-white py-16 px-12" ref={sectionRef}>
      {/* TÍTULOS CON FADE IN */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }} // EMPieza invisible
        animate={{ opacity: isInView ? 1 : 0 }} // SE DESVANECE CUANDO ESTÁ EN VISTA
        exit={{ opacity: 0 }} // DESAPARECE SUAVEMENTE AL SALIR
        transition={{ duration: 2, ease: "easeInOut" }} // TRANSICIÓN DE FADE SUAVE
      >
        <p className="text-primary font-bold text-2xl">Estilos de Bailes Competitivos</p>
        <h2 className="text-5xl font-bold text-white mt-4 mb-20 max-w-3xl m-auto">
          ¡SUMÉRGETE EN EL RITMO: ¡DESCUBRE TU VIAJE DE BAILE!
        </h2>
      </motion.div>

      {/* CARRUSEL DE IMÁGENES */}
      <div className="w-full flex justify-center items-center space-x-4">
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }} // EMPieza invisible
          animate={{ opacity: isInView ? 1 : 0 }} // SE DESVANECE CUANDO ESTÁ EN VISTA
          exit={{ opacity: 0 }} // DESAPARECE SUAVEMENTE AL SALIR
          transition={{ duration: 2, ease: "easeInOut" }} // TRANSICIÓN DE FADE SUAVE
          key={grupoActual} // CAMBIAR GRUPO ACTUAL HACE QUE SE VUELVA A RENDERIZAR CON FADE
        >
          {imagenesAMostrar.map((imagen, i) => (
            <motion.div
              key={i}
              className={`relative shadow-lg rounded-2xl w-60 h-96 bg-cover bg-center`}
              style={{
                backgroundImage: `url(${imagen})`,
                boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.3)', // SOMBRA CLARA
              }}
              initial={{ y: 0 }}
              animate={{
                y: i === 1 || i === 3 ? -20 : i === 2 ? -40 : 0, // AJUSTE DE ALTURA
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }} // DURACIÓN INDIVIDUAL DE LAS IMÁGENES
            />
          ))}
        </motion.div>
      </div>

      {/* TEXTO DEL GRUPO CON FADE IN */}
      <motion.div
        className="text-center mt-4 text-primary font-bold text-3xl tracking-widest"
        initial={{ opacity: 0 }} // INICIA INVISIBLE
        animate={{ opacity: isInView ? 1 : 0 }} // SE DESVANECE CUANDO ESTÁ EN VISTA
        exit={{ opacity: 0 }} // DESAPARECE SUAVEMENTE AL SALIR
        transition={{ duration: 1, ease: "easeInOut" }} // COORDINACIÓN CON LAS IMÁGENES
      >
        {textoGrupo}
      </motion.div>

      {/* BARRA DE PROGRESO */}
      <div className="w-full mt-4">
        <motion.div
          className="relative bg-gray-600 h-1 w-1/6 mx-auto rounded-full" // Ancho reducido para que esté alineado con el texto
        >
          <motion.div
            className="absolute bg-primary h-1 rounded-full"
            style={{ width: `${progress}%` }} // ANIMACIÓN DE LLENADO
            transition={{ duration: 1, ease: "linear" }} // TRANSICIÓN LINEAL PARA LLENADO
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EstilosDeBaile;
