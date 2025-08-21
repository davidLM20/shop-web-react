

type CategoryCardsProps = {
    title: string;
    image: string;
    count: number;
};

const CategoryCards = ({ title, image, count }: CategoryCardsProps) => {
    return (
        <div className="group relative flex flex-col rounded-2xl px-2 py-6 bg-white shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition-all">
            <div className="relative w-full h-40">
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800  group-hover:text-orange-500 transition-colors">
                    {title}
                </h3>
                <span className=" bg-orange-100 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full ">{count} Productos</span>
            </div>
        </div>
    );
};

export default CategoryCards;