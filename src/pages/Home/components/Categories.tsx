import CategoryCards from "./CategoryCards";
import drillImg from "../../../assets/img/drill.png";
import cementImg from "../../../assets/img/cemento.png";
import paintImg from "../../../assets/img/paint.png";
import cableImg from "../../../assets/img/cable.png";
import ButtonText from "../../../components/ui/ButtonText";

const Categories = () => {
    const categories = [
        { title: "Herramientas", image: drillImg, count: 45 },
        { title: "Construcción", image: cementImg, count: 32 },
        { title: "Pinturas", image: paintImg, count: 18 },
        { title: "Electricidad", image: cableImg, count: 27 },
    ];
    return (
        <section className="flex flex-col py-10 px-6">
            <div className="flex items-center justify-between w-auto mb-4">
                <h2 className="text-2xl text-gray-800 font-bold">Todo lo que necesitas</h2>
                <ButtonText variant="primary">Ver categorías</ButtonText>
            </div>
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
