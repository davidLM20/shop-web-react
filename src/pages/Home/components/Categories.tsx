import CategoryCards from "./CategoryCards";
import drillImg from "../../../assets/png/drill.png";
import cementImg from "../../../assets/png/cement.png";
import paintImg from "../../../assets/png/paint.png";
import cableImg from "../../../assets/png/cable.png";

const Categories = () => {
    const categories = [
        { title: "Herramientas", image: drillImg, count: 45 },
        { title: "Construcción", image: cementImg, count: 32 },
        { title: "Pinturas", image: paintImg, count: 18 },
        { title: "Electricidad", image: cableImg, count: 27 },
    ];
    return (
        <section className="flex flex-col py-10 px-6 gap-4">
            <h2 className="text-2xl text-gray-800 font-bold mb-6 text-center">Todo lo que necesitas</h2>
            <p className="text-gray-600 text-center">Encuentra exactamente lo que buscas navegando por nuestras categorías especializadas, cada una con productos de la más alta calidad.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <CategoryCards
                        key={i}
                        title={cat.title}
                        count={cat.count}
                        image={cat.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Categories;
