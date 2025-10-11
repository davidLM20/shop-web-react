import CategoryCards from "./CategoryCards";
import drillImg from "../../assets/img/categories/herramientas-electricas.jpeg";
import cementImg from "../../assets/img/categories/herramientas-electricas.jpeg";
import paintImg from "../../assets/img/categories/herramientas-electricas.jpeg";
import cableImg from "../../assets/img/categories/herramientas-electricas.jpeg";
import ButtonText from "../ui/ButtonText";

import { motion } from "framer-motion";

const Categories = () => {
    const categories = [
        { title: "Herramientas Eléctricas", image: drillImg, count: 245 },
        { title: "Herramientas Manuales", image: cementImg, count: 189 },
        { title: "Ferretería", image: paintImg, count: 567 },
        { title: "Materiales de Construcción", image: cableImg, count: 124 },
        { title: "Equipos de Seguridad", image: cableImg, count: 89 },
        { title: "Pinturas y Acabados", image: cableImg, count: 1567 },
        { title: "Jardinería", image: cableImg, count: 98 },
        { title: "Fontanería", image: cableImg, count: 134 },
    ];
    return (
        <section className="flex flex-col  max-w-[1440px] mx-auto pt-32 rounded-2xl gap-2 mb-20">
            <div className="flex flex-col w-auto mb-4 gap-4">
                <div className="flex justify-between w-full ">
                    <h2 className="text-3xl text-gray-700 font-bold">Nuestras Categorías</h2>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">Encuentra todo lo que necesitas para tus proyectos organizados por categorías</p>
                    <ButtonText variant="primary">Ver categorías</ButtonText>
                </div>
            </div>
            <div className="grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5,
                            delay: i * 0.1, 
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                    >
                        <CategoryCards
                            {...cat}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
