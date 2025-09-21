import Button from "../../../components/ui/Button";
import firtsImg from "../../../assets/img/home/herramientas-profesionales.jpg";
import secondImg from "../../../assets/img//home/herramientas-electricas.jpeg";
import thirdImg from "../../../assets/img//home/herramientas-ferreteria.jpeg";

const Hero = () => {
    return (
        <section className="flex items-center max-w-[1440px] mx-auto pt-32 rounded-2xl gap-16">
            <div className="flex flex-col w-[50%] pt-20 pb-20 gap-4">
                <h1 className="text-5xl">
                    <span className="font-bold text-gray-700">Tu ferretería de</span>{" "}
                    <span className="font-medium text-orange-500">confianza</span>
                </h1>
                <p className="mt-4 font-medium text-lg text-gray-700">Encuentra las mejores herramientas y materiales de construcción para todos tus proyectos</p>
                <p className="text-md text-gray-500">Más de 25 años brindando soluciones profesionales con la mejor calidad y servicio. Desde herramientas básicas hasta equipos especializados.</p>
                <div className="flex gap-4 mt-4">
                    <Button variant="primary">Ver catálogo</Button>
                    <Button variant="secondary">Nuestras ofertas</Button>
                </div>
            </div>
            <div className="w-1/2 overflow-hidden">
                <div className="grid grid-rows-[2fr_1fr] gap-4 h-full">
                    <div className="rounded-2xl h-100"><img src={firtsImg} alt="" className="w-full h-full object-cover rounded-2xl"/></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl"><img src={secondImg} alt="" className="w-full h-full object-cover rounded-2xl"/></div>
                        <div className="rounded-2xl"><img src={thirdImg} alt="" className="w-full h-full object-cover rounded-2xl"/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
