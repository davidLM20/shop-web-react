import Button from "../ui/Button";

type ProdcutsCardProps = {
    title: string;
    image: string;
    description: string;
    price: number;
};

const ProdcutsCard = ({ title, image, price, description }: ProdcutsCardProps) => {
    return (
        <div className="group relative flex flex-col rounded-2xl bg-white shadow-md hover:shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition-trasform">
            <div className="relative w-full h-40">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="flex  flex-col px-6 py-4 text-left">
                <h3 className="text-xm font-semibold text-gray-600  group-hover:text-orange-500 transition-colors mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
                <div className="flex justify-between">
                    <div className="flex flex-col pt-2 gap-0">
                        <span className=" text-gray-800 text-lg font-semibold">${price}</span>
                        <span className="text-gray-400 text-[0.8rem]">USD</span>
                    </div>
                    <Button variant="primary">Agregar</Button>
                </div>
            </div>
        </div>
    );
};

export default ProdcutsCard;