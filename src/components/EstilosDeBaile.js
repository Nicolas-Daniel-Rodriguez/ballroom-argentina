import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import pasodoble from './../assets/pasodoble.png';
import tango from './../assets/tango.png';
import tres from './../assets/3.png';
import cuatro from './../assets/4.png';
import cinco from './../assets/5.png';

// DOS GRUPOS DE IMÁGENES
// Standar : Vals vienés, Vals, Tango Europeo, Foxtrot y Quickstep
// Latino : Samba, Cha cha, Rumba, Paso Doble, Jive
const grupo1 = [pasodoble, tres, cuatro, cinco, tango];
const grupo2 = [cinco, tango, tres, cuatro, pasodoble];

// Nombres de los ritmos para cada grupo
const ritmosLatino = ["Samba", "Cha cha", "Rumba", "Paso Doble", "Jive"];
const ritmosStandar = ["Vals vienés", "Vals", "Tango Europeo", "Foxtrot", "Quickstep"];

const EstilosDeBaile = () => {
  const [grupoActual, setGrupoActual] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.3 });

    const sectionElement = sectionRef.current;

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrupoActual((prevGrupo) => (prevGrupo === 0 ? 1 : 0));
      setProgress(0);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + (100 / 6));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [progress]);

  // Detectar si la pantalla es pequeña o mediana
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint en Tailwind
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imagenesAMostrar = grupoActual === 0 ? grupo1 : grupo2;
  const textoGrupo = grupoActual === 0 ? "Latino" : "Standar";
  const ritmos = grupoActual === 0 ? ritmosLatino : ritmosStandar;

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-12" ref={sectionRef}>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p className="text-primary font-bold text-2xl">Estilos de Bailes Competitivos</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-20 max-w-3xl mx-auto px-8">
          ¡SUMÉRGETE EN EL RITMO: ¡DESCUBRE TU VIAJE DE BAILE!
        </h2>
      </motion.div>

      <div className="w-full flex justify-center items-center space-x-4 md:space-x-6">
        <motion.div
          className="overflow-x-hidden grid grid-cols-2 md:flex md:flex-row gap-10 px-10 pb-5 md:pt-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          key={grupoActual}
        >
          {imagenesAMostrar.map((imagen, i) => (
            <motion.div
              key={i}
              className={`relative shadow-lg rounded-2xl w-32 md:w-60 h-72 md:h-96 bg-cover bg-center`}
              style={{
                backgroundImage: `url(${imagen})`,
                boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.3)',
              }}
              initial={{ y: 0 }}
              animate={{
                // Condicional para desactivar la animación en pantallas medianas y pequeñas
                y: !isSmallScreen
                  ? (i === 1 || i === 3 ? -20 : i === 2 ? -40 : 0)
                  : 0,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Fondo gris translúcido con el texto centrado */}
              <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-50 text-center py-2">
                <p className="text-white font-semibold text-sm md:text-xl">{ritmos[i]}</p> {/* Nombre del ritmo */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-4 text-primary font-bold  text-2xl md:text-3xl tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {textoGrupo}
      </motion.div>

      <div className="w-full mt-4">
        <motion.div
          className="relative bg-gray-600 h-1 w-1/6 mx-auto rounded-full"
        >
          <motion.div
            className="absolute bg-primary h-1 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EstilosDeBaile;
