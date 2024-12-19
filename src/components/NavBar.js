import { useState, useEffect, useRef } from 'react';
import logo from './../assets/Logo-transp.png';

const NavBar = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Función para desplazarse suavemente a la sección
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="absolute top-0 mt-4 left-0 w-full h-20 flex items-center justify-between px-6 sm:px-12 bg-transparent z-50">
      {/* Logo y texto */}
      <div className="text-primary text-lg sm:text-2xl font-semibold flex items-center">
        <img src={logo} alt="Logo" className="w-24 h-24 mr-4" />
        <span className="hidden lg:block sm:hidden">Escuela Argentina de Ballroom</span>
      </div>

      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex space-x-4 sm:space-x-10 text-white font-semibold items-center">
        <li
          className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Inicio
        </li>
        <li
          className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl"
          onClick={() => scrollToSection(refs.estilos)}
        >
          Estilos
        </li>
        <li
          className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl"
          onClick={() => scrollToSection(refs.academia)}
        >
          Academia
        </li>
        <li
          className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl"
          onClick={() => scrollToSection(refs.contacto)}
        >
          Contacto
        </li>
        <button className="bg-primary text-white py-1 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-lg hover:bg-opacity-80">
          Inscribirse
        </button>
      </ul>

      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef}
          className="text-primary focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable (hamburguesa) */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute right-0 top-20 bg-gray-950 shadow-lg md:hidden rounded-b-2xl">
          <ul className="flex flex-col space-y-4 text-primary text-lg font-semibold py-4 px-6">
            <li className="hover:font-bold hover:text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Inicio
            </li>
            <li className="hover:font-bold hover:text-white cursor-pointer" onClick={() => scrollToSection(refs.estilos)}>
              Estilos
            </li>
            <li className="hover:font-bold hover:text-white cursor-pointer" onClick={() => scrollToSection(refs.academia)}>
              Academia
            </li>
            <li className="hover:font-bold hover:text-white cursor-pointer" onClick={() => scrollToSection(refs.contacto)}>
              Contacto
            </li>
            <button className="bg-primary text-white py-2 px-4 rounded text-lg hover:bg-opacity-80">
              Inscribirse
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
