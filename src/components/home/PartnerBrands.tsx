
import bosch from "../../assets/img/partner/Bosch-Emblem.png";
import dewalt from "../../assets/img/partner/Dewalt.png";
import makita from "../../assets/img/partner/makita.png";
import stanley from "../../assets/img/partner/Stanley.png";

const PartnerBrands = () => {

    const brands = [
        { id: 1, name: 'Brand 1', logo: bosch },
        { id: 2, name: 'Brand 2', logo: dewalt },
        { id: 3, name: 'Brand 3', logo: makita },
        { id: 4, name: 'Brand 4', logo: stanley },
        { id: 1, name: 'Brand 1', logo: bosch },
        { id: 2, name: 'Brand 2', logo: dewalt },
        { id: 3, name: 'Brand 3', logo: makita },
        { id: 4, name: 'Brand 4', logo: stanley },
    ];

    return (
        <section className="flex flex-col gap-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-5xl font-bold text-gray-700">Marcas <span className="text-5xl font-bold text-orange-500">Aliadas</span></h2>
                    <span className="text-gray-600 text-center mt-2">Trabajamos con las mejores marcas del mundo para ofrecerte calidad garantizada</span>
                </div>
                <div className="flex justify-center items-center relative overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex justify-center items-center p-12 w-max gap-12 animate-marquee">
                        {/*Corregir esta animacion usar desde tailwind.config.js*/}
                        {/*<style>{`
                            @keyframes infinite-scroll {
                                from { transform: translateX(0); }
                                to { transform: translateX(-100%); }
                            }
                        `}</style>*/}

                        {[...brands, ...brands].map((brand, index) => (
                            <img
                                key={index}
                                src={brand.logo}
                                alt={brand.name}
                                className="h-24 w-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerBrands;