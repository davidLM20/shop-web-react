import { Star } from "lucide-react";
import Button from "../../../components/ui/Button";
import heroImg from "../../../assets/png/hero-img.png";

const Hero = () => {
    return (
        <section className="flex items-center rounded-2xl mt-28 bg-gray-100">
            <div className="flex flex-col pt-20 pb-20 pl-32 pr-32 gap-4">
                <div className="flex items-center gap-2"> <Star className="size-5 text-orange-300 fill-orange-300" /> <span className="text-orange-400">Más de 10,000 clientes satisfechos</span></div>
                <h1 className="text-6xl ">
                    <span className="font-bold text-orange-500">Tu ferretería</span>{" "}
                    <span className="font-medium text-gray-600">de confianza</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">Encuentra las mejores herramientas y materiales para todos tus proyectos de construcción y reparación.</p>
                <div className="flex gap-4 mt-4">
                    <Button variant="primary">Ver catálogo completo</Button>
                    <Button variant="secondary">Nuestras ofertas</Button>
                </div>
            </div>
            <div className="">
                <img
                    src={heroImg}
                    alt="Productos destacados"
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
};

export default Hero;
