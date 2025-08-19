import NavButton from "../ui/Navbutton";
import { Home, ShoppingCart, Layers, Phone } from "lucide-react";
import SearchBar from "../ui/SearchBar";


function Navbar() {
    const handleSearch = (query: string) => {
        console.log("Buscando:", query);
        // Aquí iría la lógica para buscar en productos o categorías (API call)
    };
    return (
        <nav className="flex flex-col px-6 py-4">
            <div className="flex items-center justify-between">{/* Logo */}
                <div>
                    <div className="text-2xl font-bold text-orange-500">FerreMax</div>
                    <p className="font-size:0.5rem text-gray-600">Tu ferretería de confianza</p>
                </div>
                <div className="flex-1 pl-8 mx-6">
                    <SearchBar onSearch={handleSearch} />
                </div>
                {/* Menú */}
                <ul className="flex items-center gap-1">
                    <NavButton to="/" icon={<Home size={18} />}>
                        Inicio
                    </NavButton>
                    <NavButton to="categorias" icon={<Layers size={18} />}>
                        Categorías
                    </NavButton>
                    <NavButton to="carrito" icon={<ShoppingCart size={18} />}>
                        Carrito
                    </NavButton>
                    <span className="text-gray-300">|</span>
                    <NavButton to="contacto" icon={<Phone size={18} />}>
                        Contacto
                    </NavButton>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
