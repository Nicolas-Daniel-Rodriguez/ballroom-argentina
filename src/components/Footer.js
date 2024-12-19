import React from "react";
import logo from "./../assets/Logo-transp-blanco.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-16 mt-10">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo y descripción */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="flex items-center mb-6">
            <img src={logo} alt="Logo" className="w-24 h-24 mr-4" />
            <h2 className="ml-3 text-2xl font-bold">Ballroom Argentina</h2>
          </div>
          <p className="text-gray-400 max-w-md">
            Descubre la magia de la danza deportiva mientras nuestros talentosos
            instructores te guían en un viaje transformador.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-primary mb-2">HORARIOS:</h3>
          <p className="text-gray-400">Martes - Viernes: 09:00 - 21:00</p>
          <p className="text-gray-400">Sábados: 09:00 - 12:00</p>
          <p className="text-gray-400 mt-4">
            <i className="fas fa-map-marker-alt text-primary"></i> 12 y 50, La
            Plata, Buenos Aires, Argentina
          </p>
          <p className="text-gray-400">
            <i className="fas fa-envelope text-primary"></i>{" "}
            <a
              href="mailto:ballroomargentina@gmail.com"
              className="hover:text-primary transition"
            >
              ballroomargentina@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            <i className="fas fa-phone text-primary"></i>{" "}
            <a href="tel:2212341234" className="hover:text-primary transition">
              221-234-1234
            </a>
          </p>
        </div>
      </div>

      <hr className="border-t border-white w-full my-4 mx-auto" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Redes sociales */}
        <div className="text-center mb-4">
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-primary p-2 w-9 hover:bg-cyan-500 transition"
            >
              <i className="fab fa-facebook-f text-black"></i>
            </a>
            <a
              href="#"
              className="bg-primary p-2 w-9 hover:bg-cyan-500 transition"
            >
              <i className="fab fa-instagram text-black"></i>
            </a>
            <a
              href="#"
              className="bg-primary p-2 w-9 hover:bg-cyan-500 transition"
            >
              <i className="fab fa-youtube text-black"></i>
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-gray-500 text-sm">
          Copyright 2025 © All Right Reserved | Design by Ballroom Argentina
        </div>
      </div>
    </footer>
  );
};

export default Footer;
