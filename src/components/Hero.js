import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import pasodoble from './../assets/pasodoble.png';
import tango from './../assets/tango.png';
import tres from './../assets/3.png';
import cuatro from './../assets/4.png';
import cinco from './../assets/5.png';
import Video from './Video'; 

const images = [pasodoble, tres, cuatro, cinco, tango, pasodoble, tres, cuatro, cinco, tango];

const Hero = () => {
  const [index, setIndex] = useState(0); // Iniciar desde la primera imagen
  const [isVideoVisible, setIsVideoVisible] = useState(false); // Estado para controlar la visibilidad del video

  // Movimiento automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Mueve al siguiente
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []); // Este useEffect solo se ejecuta una vez al cargar el componente

  const handleVideoToggle = () => {
    setIsVideoVisible(!isVideoVisible); // Toggle de visibilidad del video
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false); // Cerrar el video
  };

  return (
    <div className="relative h-[calc(110vh-80px)] w-full flex justify-start items-center bg-black overflow-hidden">
      
      {/* Contenedor del contenido sobre el carrusel */}
      <div className="absolute left-16 right-16 sm:left-12 sm:right-12 top-1/4 z-10 text-white max-w-lg">
        {/* Texto pequeño */}
        <p className="text-primary text-2xl font-bold">Bienvenidos a Ballroom Argentina</p>

        {/* Título grande */}
        <h1 className="text-4xl md:text-5xl font-bold mt-4 max-w-2xl">¡Da rienda suelta a tus movimientos!</h1>

        {/* Párrafo corto */}
        <p className="text-xl mt-2 max-w-2xl text-justify">
          Aprende la mejor danza deportiva en nuestra academia. Disfruta de clases de tango, pasodoble, cha cha cha, rumba y más, con instructores expertos.
        </p>

        {/* Botón y Rectángulo con imagen de reproducción */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80">
            Únete Ahora
          </button>

          {/* Rectángulo con icono de reproducción */}
          <div
            className="w-14 h-14 bg-gray-800 flex justify-center items-center rounded-md cursor-pointer"
            onClick={handleVideoToggle}
          >
            <span className="text-white text-3xl">▶</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg">
            <button
              className="absolute top-1 right-2 text-3xl text-black hover:font-bold"
              onClick={handleCloseVideo}
            >
              ×
            </button>
            <Video /> {/* Componente Video.js */}
          </div>
        </div>
      )}

      {/* Galería de imágenes */}
      <div className="relative mt-44 flex justify-start items-center w-full h-full">
        {images.map((image, i) => {
          // Calcular la posición y escala de las imágenes
          const offset = (i - index + images.length) % images.length;
          const isCenter = offset === 2; // Definir el índice de la imagen central (el centro será la tercera imagen de la lista)

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isCenter ? 1 : 0.5, // La central está completamente visible
                scale: isCenter ? 1 : 0.8, // La central es más grande
                x: offset * 420, // Las imágenes se mueven a la izquierda y derecha
                zIndex: isCenter ? 9 : 1, // Aseguramos que la imagen central esté arriba
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-8/12 md:w-4/12 h-full bg-cover bg-center rounded-br-full rounded-tl-full shadow-lg"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;
