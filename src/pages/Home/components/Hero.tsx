import { Star } from "lucide-react";
import Button from "../../../components/ui/Button";
import heroImg from "../../../assets/png/hero-img.png";

const Hero = () => {
    return (
        <section className="flex items-center max-w-[1440px] mx-auto pt-32 rounded-2xl gap-16">
            <div className="flex flex-col w-[50%] pt-20 pb-20 gap-4">
                <h1 className="text-6xl">
                    <span className="font-bold text-gray-800">Tu ferretería de</span>{" "}
                    <span className="font-medium text-orange-500">confianza</span>
                </h1>
                <p className="mt-4 text-lg text-gray-800">Encuentra las mejores herramientas y materiales de construcción para todos tus proyectos</p>
                <p className="text-lg text-gray-600">Más de 25 años brindando soluciones profesionales con la mejor calidad y servicio. Desde herramientas básicas hasta equipos especializados.</p>
                <div className="flex gap-4 mt-4">
                    <Button variant="primary">Ver catálogo</Button>
                    <Button variant="secondary">Nuestras ofertas</Button>
                </div>
            </div>
            <div className="w-[50%] h-100 bg-amber-400">
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="col-span-2 row-span-3">1</div>
                    <div className="row-span-2 col-start-2 row-start-4">2</div>
                    <div className="row-span-2 col-start-1 row-start-4">3</div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
