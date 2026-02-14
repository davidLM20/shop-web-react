import Button from "../ui/Button";
import { Mail } from "lucide-react";


const Newsletter = () => {
    return (
        <section className="flex flex-col justify-center items-center py-12 px-6 rounded-2xl text-center bg-gray-100 text-gray-700 gap-4">
            <span className="bg-orange-500 p-6 rounded-full text-white"><Mail size={52} /></span>
            <h2 className="text-2xl font-bold mb-4">Mantente al día con nuestras ofertas</h2>
            <p className="mb-6">Suscríbete a nuestro newsletter y recibe ofertas exclusivas, nuevos productos y consejos profesionales directamente en tu correo.</p>
            <form className="flex flex-col w-full justify-center items-center gap-4">
                <div className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="w-[360px] px-4 py-2 rounded-lg bg-white border-[0.1rem] border-gray-300 text-gray-600"
                    />
                    <Button variant="primary">Suscribirse</Button>
                </div>
                <span className="text-[0.9rem] text-gray-500">No compartimos tu información. Puedes cancelar tu suscripción en cualquier momento.</span>
            </form>
        </section>
    );
};

export default Newsletter;
