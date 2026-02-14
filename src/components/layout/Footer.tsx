

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} FerroMax. Todos los derechos reservados.</p>
      <div className="mt-2 text-sm text-gray-400">
        🔒 Compra 100% segura - Métodos de pago confiables
      </div>
    </footer>
  );
};

export default Footer;
