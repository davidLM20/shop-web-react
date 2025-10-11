import NavButton from "../ui/Navbutton";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "../ui/SearchBar";
import { useEffect, useState } from "react";

function Navbar() {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);
    const handleSearch = (query: string) => {
        console.log("Buscando:", query);
        // Aquí iría la lógica para buscar en productos o categorías (API call)
    };
    return (
        <nav className={`fixed top-0 left-0 px-12 py-4 w-full bg-white z-50 transition-shadow duration-300 ${hasShadow ? "shadow-md" : ""
            }`}>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-2xl font-bold text-orange-500">FerreMax</div>
                    <p className="font-size:0.5rem text-gray-600">Tu ferretería de confianza</p>
                </div>
                <div className="flex-1 pl-8 mx-6">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <ul className="flex items-center gap-1">
                    <div className="flex bg-gray-100 rounded-xl p-1">
                        <NavButton to="/" variant="primary">
                            Inicio
                        </NavButton>
                        <NavButton to="categorias" variant="primary">
                            Categorías
                        </NavButton>
                    </div>
                    <NavButton to="carrito" variant="icon" icon={<ShoppingCart size={18} />}>
                        Carrito
                    </NavButton>
                    <span className="text-gray-300">|</span>
                    <NavButton to="cuenta" variant="icon" icon={<User size={18} />}>
                        Mi cuenta
                    </NavButton>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
