import { useState, useEffect, useRef } from 'react';
import logo from './../assets/Logo-transp.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Referencia al botón de la hamburguesa

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar si el clic es fuera del menú y del botón
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Escuchar clics fuera del menú
    document.addEventListener('click', handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 mt-4 left-0 w-full h-20 flex items-center justify-between px-6 sm:px-12 bg-transparent z-50">
      {/* Logo y texto */}
      <div className="text-primary text-lg sm:text-2xl font-semibold flex items-center">
        <img src={logo} alt="Logo" className="w-24 h-24 mr-4" />
        <span className="hidden lg:block sm:hidden">Escuela Argentina de Ballroom</span>
      </div>

      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex space-x-4 sm:space-x-10 text-white font-semibold items-center">
        <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl">Inicio</li>
        <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl">Academia</li>
        <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl">Cursos</li>
        <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-sm sm:text-xl">Contacto</li>
        <button className="bg-primary text-white py-1 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-lg hover:bg-opacity-80">
          Inscribirse
        </button>
      </ul>

      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef} // Añadimos la referencia aquí
          className="text-primary focus:outline-none"
          onClick={(e) => {
            e.stopPropagation(); // Prevenimos la propagación del clic
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable (hamburguesa) */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute right-0 top-20 bg-gray-950 shadow-lg md:hidden rounded-b-2xl">
          <ul className="flex flex-col space-y-4 text-primary text-lg font-semibold py-4 px-6">
            <li className="hover:font-bold hover:text-white cursor-pointer">Inicio</li>
            <li className="hover:font-bold hover:text-white cursor-pointer">Academia</li>
            <li className="hover:font-bold hover:text-white cursor-pointer">Cursos</li>
            <li className="hover:font-bold hover:text-white cursor-pointer">Contacto</li>
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
