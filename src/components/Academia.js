import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import img1 from "./../assets/img1.png"; // reemplazar con las rutas de tus imágenes
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import dancerImage from "./../assets/113m.png";
import ico1 from "./../assets/icono-baile.png";
import ico2 from "./../assets/icono-campeones.png";

const Academia = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // Primera sección sigue con el 30%
  });

  const { ref: img1Ref, inView: img1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // Primera sección sigue con el 30%
  });

  const { ref: img2Ref, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // Primera sección sigue con el 30%
  });

  const { ref: img3Ref, inView: img3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // Primera sección sigue con el 30%
  });

  // Segunda sección con el 50% de visibilidad
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // Segunda sección se activa con el 50%
  });

  return (
    <>
      <section className="relative w-full px-16 flex justify-center items-center bg-gray-950 overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-t from-transparent to-black"></div>
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
          {/* Columna izquierda: Texto */}
          <div
            ref={textRef}
            className={`text-white transition-all duration-1000 ${textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-primary text-2xl font-bold ">Academia</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-2xl pb-5">
              ¡Da rienda suelta a tu pasión, enciende tus movimientos!
            </h2>
            <p className="text-xl mt-2 max-w-2xl text-justify">
              Adéntrate en un mundo donde el ritmo se encuentra con la gracia y
              el movimiento se convierte en una forma de arte. En Ballroom
              Argentina, somos más que un simple lugar para aprender a bailar,
              somos una comunidad vibrante que celebra la belleza, la expresión
              y la alegría que la danza deportiva trae a nuestras vidas.
            </p>
          </div>

          {/* Columna derecha: Imágenes */}
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            {/* Imagen 1 */}
            <motion.div
              ref={img1Ref}
              className={`w-24 sm:w-36 md:w-48 transition-all duration-5000 ${img1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: img1InView ? 1 : 0, y: img1InView ? 30 : -50 }}
            >
              <img src={img1} alt="Imagen 1" className="w-full h-full rounded-lg shadow-lg" />
            </motion.div>

            {/* Imagen 2 (posición más baja) */}
            <motion.div
              ref={img2Ref}
              className={`w-24 sm:w-36 md:w-48 transition-all duration-5000 ${img2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: img2InView ? 1 : 0, y: img2InView ? -30 : 50 }}
            >
              <img src={img2} alt="Imagen 2" className="w-full h-full rounded-lg shadow-lg" />
            </motion.div>

            {/* Imagen 3 */}
            <motion.div
              ref={img3Ref}
              className={`w-24 sm:w-36 md:w-48 transition-all duration-5000 ${img3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: img3InView ? 1 : 0, y: img3InView ? 30 : -50 }}
            >
              <img src={img3} alt="Imagen 3" className="w-full h-full rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Segunda Sección */}
      <section
        ref={secondSectionRef}
        className="relative mt-[-3rem] w-full px-4 flex justify-center items-center bg-gray-950 overflow-hidden py-20"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Imagen de la bailarina */}
          <motion.div
            className="relative w-full lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: secondSectionInView ? 1 : 0, x: secondSectionInView ? 0 : -50 }}
            transition={{ duration: 1.5 }}
            >
            <img
              src={dancerImage}
              alt="Dancer"
              className="object-cover max-h-[800px] opacity-90 w-[30rem] mx-auto"
            />
          </motion.div>

          {/* Texto y contenido */}
          <motion.div
            className="w-full lg:w-1/2 px-6 lg:px-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: secondSectionInView ? 1 : 0, y: secondSectionInView ? 0 : 50 }}
            transition={{ duration: 1.5 }}
          >
            <h4 className="text-primary text-2xl font-bold">Baila con pasión</h4>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-2xl pb-2 mb-6 leading-snug text-white">
              Disfrutarás uniéndote a nuestra lección de baile.
            </h2>
            <p className="text-white text-xl mt-2 max-w-2xl text-justify mb-8">
              Bailando con pasión, emoción y autenticidad. Va más allá de la
              mera ejecución de los pasos y aspectos técnicos de un baile. En
              cambio, enfatiza la importancia de conectarse con la música,
              expresarse plenamente y dejar que las emociones fluyan a través
              del movimiento.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-4 mb-8">
              <motion.li
                className="flex items-center text-white text-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                <span className="mr-2 text-primary">✔</span>
                Practica como si nunca hubieras ganado
              </motion.li>
              <motion.li
                className="flex items-center text-white text-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.4 },
                }}
              >
                <span className="mr-2 text-primary">✔</span>
                Actúa como si nunca hubieras perdido
              </motion.li>
              <motion.li
                className="flex items-center text-white text-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.6 },
                }}
              >
                <span className="mr-2 text-primary">✔</span>
                Bailar con los pies es una cosa
              </motion.li>
              <motion.li
                className="flex items-center text-white text-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.8 },
                }}
              >
                <span className="mr-2 text-primary">✔</span>
                Bailar con el corazón es otra muy distinta.
              </motion.li>
            </ul>

            {/* Tarjetas informativas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.5 },
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="text-primary text-3xl mr-3">
                    <img className="w-16" src={ico1} alt="Ico Baile"></img>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    Escuela de Danza Premium
                  </h3>
                </div>
                <p className="text-white text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.5 },
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="text-primary text-3xl mr-3">
                    <img className="w-16" src={ico2} alt="Ico Campeones"></img>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    Desarrolla tus habilidades
                  </h3>
                </div>
                <p className="text-white text-xl">
                  El lugar ideal para tu crecimiento personal y profesional.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Academia;
