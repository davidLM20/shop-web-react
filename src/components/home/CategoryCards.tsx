

type CategoryCardsProps = {
    title: string;
    image: string;
    count: number;
};

const CategoryCards = ({ title, image, count }: CategoryCardsProps) => {
    return (
        <article className="group relative rounded-2xl shadow-md hover:shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition-trasform">
            <img src={image} alt={title} className="w-full h-40 object-cover  group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-lg font-bold text-gray-50 group-hover:text-orange-500 transition-colors drop-shadow-md">
                    {title}
                </h3>
            </div>
            <span className="absolute top-2 right-2 bg-orange-500 text-gray-50 text-xs font-semibold px-3 py-1 rounded-md ">
                {count}
            </span>

        </article>
    );
};

export default CategoryCards;