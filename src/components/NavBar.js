import logo from './../assets/Logo-transp.png'

const NavBar = () => (
  <nav className="absolute mt-4 top-0 left-0 w-full h-20 flex items-center justify-between px-12 bg-transparent z-50">
    <div className="text-primary text-2xl font-semibold flex items-center">
      <img
        src= {logo}  // Reemplaza con la ruta de tu logo
        alt="Logo"
        className="w-24 h-24 mr-4" // Ajusta el tamaño con w-12 y h-12 (puedes cambiarlo según lo necesites)
      />
      Escuela Argentina de Ballroom
    </div>

    <ul className="flex space-x-10 text-white font-semibold items-center">
      <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-xl">Inicio</li>
      <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-xl">Academia</li>
      <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-xl">Cursos</li>
      <li className="hover:text-white hover:underline hover:underline-offset-8 cursor-pointer text-primary text-xl">Contacto</li>

      <button className="bg-primary text-white py-2 px-4 rounded text-lg hover:bg-opacity-80">Inscribirse</button>
    </ul>

  </nav>
);

export default NavBar;
