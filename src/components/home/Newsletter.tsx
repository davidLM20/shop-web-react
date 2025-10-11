import Button from "../ui/Button";


const Newsletter = () => {
    return (
        <section className="py-12 px-6 text-center bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-4">Mantente actualizado</h2>
            <p className="mb-6">Recibe las mejores ofertas, nuevos productos y consejos profesionales directamente en tu email.</p>
            <form className="flex flex-col md:flex-row justify-center gap-4">
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="px-4 py-2 rounded-4xl bg-gray-500/40 border-[0.1rem] border-gray-400 text-gray-100"
                />
                <Button variant="primary">Suscribirse</Button>
            </form>
        </section>
    );
};

export default Newsletter;
