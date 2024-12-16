import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import img1 from './../assets/Logo-transp-blanco.png'; // reemplazar con las rutas de tus imágenes
import img2 from './../assets/Logo-transp-blanco.png';
import img3 from './../assets/Logo-transp-blanco.png';

const Academia = () => {
    const { ref: textRef, inView: textInView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    const { ref: img1Ref, inView: img1InView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    const { ref: img2Ref, inView: img2InView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    const { ref: img3Ref, inView: img3InView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    return (
      <section className="relative h-[calc(110vh-80px)] w-full px-16 flex justify-center items-center bg-gray-950 overflow-hidden py-20">
       <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-t from-transparent to-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
          {/* Columna izquierda: Texto */}
          <div
            ref={textRef}
            className={`text-white transition-all duration-1000 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-primary text-2xl font-bold ">Academia</p>
            <h2 className="text-4xl md:text-5xl  font-bold mt-4 max-w-2xl pb-5">¡Da rienda suelta a tu pasión, enciende tus movimientos!</h2>
            <p className="text-xl mt-2 max-w-2xl text-justify">
            Adéntrate en un mundo donde el ritmo se encuentra con la gracia y el movimiento se convierte en una forma de arte. En Dansy, somos más que un simple lugar para aprender a bailar: somos una comunidad vibrante que celebra la belleza, la expresión y la alegría que la danza trae a nuestras vidas.
            </p>
          </div>
  
          {/* Columna derecha: Imágenes */}
          <div className="flex flex-row items-center gap-6">
            {/* Imagen 1 */}
            <motion.div
              ref={img1Ref}
              className={`w-24 sm:w-32 md:w-40 transition-all duration-5000 ${img1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: img1InView ? 1 : 0, y: img1InView ? 0 : -50 }}
            >
              <img src={img1}  alt="Imagen 1" className="object-cover w-full h-full" />
            </motion.div>
  
            {/* Imagen 2 (posición más baja) */}
            <motion.div
              ref={img2Ref}
              className={`w-24 sm:w-32 md:w-40 transition-all duration-5000 ${img2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: img2InView ? 1 : 0, y: img2InView ? 0 : 50 }}
            >
              <img src={img2}  alt="Imagen 2" className="object-cover w-full h-full" />
            </motion.div>
  
            {/* Imagen 3 */}
            <motion.div
              ref={img3Ref}
              className={`w-24 sm:w-32 md:w-40 transition-all duration-5000 ${img3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: img3InView ? 1 : 0, y: img3InView ? 0 : -50 }}
            >
              <img src={img3} alt="Imagen 3" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Academia;