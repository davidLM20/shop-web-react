import { Star, ShoppingCart, Heart } from "lucide-react";
import Button from "./Button";

type ProductsCardVariant = "default" | "small";

interface ProductsCardProps {
    title: string;
    image: string;
    price: number;
    rating?: number;
    description?: string;
    variant?: ProductsCardVariant;
};



export default function ProductsCard({
    title,
    image,
    price,
    rating,
    description,
    variant = "default",
}: ProductsCardProps) {

    const fullStars = Math.floor(rating || 0); // número de estrellas llenas
    const hasHalfStar = (rating || 0) % 1 >= 0.5; // si hay media estrella

    return (
        <article className={`group relative flex flex-col rounded-2xl  border-1 border-gray-200 bg-white hover:shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition-trasform 
        ${variant === "small" ? "pl-3 pr-3 pb-3" : "p-4"}`}>
            <div className={`overflow-hidden ${variant === "small" ? "h-32" : "h-48"
                } rounded-xl`}>
                <img src={image} alt={title} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div className={`flex  flex-col text-left gap-3 ${variant === "small" ? "gap-0" : "gap-3"}`}>
                <h3 className={`"
                    font-medium text-gray-600  group-hover:text-orange-500 transition-colors mb-2" ${variant === "small" ? "text-md truncate" : "text-xl"}`}>
                    {title}
                </h3>
                {/* ⭐ Rating */}
                {variant === "default" && (
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, index) => {
                            if (index < fullStars) {
                                return (
                                    <Star
                                        key={index}
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400"
                                    />
                                );
                            } else if (index === fullStars && hasHalfStar) {
                                return (
                                    <Star
                                        key={index}
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400/50"
                                    />
                                );
                            } else {
                                return (
                                    <Star
                                        key={index}
                                        size={16}
                                        className="text-gray-300"
                                    />
                                );
                            }
                        })}
                        <span className="text-sm text-gray-500 font-medium ml-1">{rating?.toFixed(1)}</span>
                    </div>)}
                {variant === "default" && (<p className="truncate text-gray-600 text-sm">{description}</p>)}
                {/* Price and Button */}
                <div className={`flex items-center gap-4 ${variant === "small" ? "text-xs" : "text-xl mt-4"}`}>
                    <span className=" text-gray-600 text-xl font-semibold">${price}</span>
                    <span className="text-gray-400 text-xl line-through">${price}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <Button variant="primary" icon={<ShoppingCart size={20} />}>Agregar</Button>
                </div>
            </div>
            <span className="absolute top-2 right-2 bg-gray-100 text-gray-400 text-xs font-semibold px-3 py-3 rounded-full ">
                <Heart size={20} />
            </span>
        </article>
    );
}
