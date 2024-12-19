import { useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import EstilosDeBaile from './components/EstilosDeBaile';
import Academia from './components/Academia';
import Estadisticas from './components/Estadisticas';
import Instructores from './components/Instructores';
import Footer from './components/Footer';

function App() {
  // Crear referencias para las secciones
  const estilosRef = useRef(null);
  const academiaRef = useRef(null);
  const contactoRef = useRef(null);

  return (
    <div>
      <NavBar
        refs={{
          inicio: null, // Inicio es el Hero, por lo que no necesita referencia
          estilos: estilosRef,
          academia: academiaRef,
          contacto: contactoRef,
        }}
      />
      <Hero />
      <div ref={estilosRef}>
        <EstilosDeBaile />
      </div>
      <div ref={academiaRef}>
        <Academia />
      </div>
      <Estadisticas />
      <Instructores />
      <div ref={contactoRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
