

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-900 text-white py-6 text-center mt-auto">
      <div className="flex flex-col">
        <h3>Ferro<span className="text-orange-500">Max</span></h3>
        <p>Tu ferretería de confianza desde 1998. Calidad, experiencia y servicio excepcional para todos tus proyectos.</p>
      </div>
      
      <p>&copy; {new Date().getFullYear()} FerroMax. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
