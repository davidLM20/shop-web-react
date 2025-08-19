
import Button from "../../../components/ui/Button";

const Hero = () => {
    return (
        <section className="flex flex-col bg-blue-500 text-white py-20">
            <h1 className="text-4xl font-bold">Tu ferretería de confianza</h1>
            <p className="mt-4 text-lg">Encuentra las mejores herramientas y materiales para todos tus proyectos de construcción y reparación.</p>
            <div className="flex gap-4 mt-4">
                <Button variant="primary">Ver catálogo completo</Button>
                <Button variant="secondary">Nuestras ofertas</Button>
            </div>
        </section>
    );
};

export default Hero;
