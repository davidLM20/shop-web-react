import firtsImg from "../../assets/img/home/herramientas-profesionales.jpg";
import drillImg from "../../assets/img/drill.png";
import cementImg from "../../assets/img/cemento.png";
import paintImg from "../../assets/img/paint.png";
import ProductsCard from "../ui/ProductsCard";


const NewBrand = () => {

    const products = [
        { title: "Taladro Percutor Bosch 650W", image: drillImg, decription: "Taladro percutor profesional con chuck de 13mm y velocidad variable. Ideal para hormigón, metal y madera.", price: 15.00, rating: 5 },
        { title: "Martillo de Garra Stanley 16oz", image: cementImg, decription: "Martillo de garra con mango de fibra de vidrio para mayor durabilidad y absorción de impactos.", price: 120.00, rating: 4.5 },
        { title: "Juego de Brochas Premium", image: paintImg, decription: "Set de 5 brochas profesionales para pintura látex y esmalte. Cerdas sintéticas de alta calidad.", price: 25.00, rating: 3 },
        { title: "Sierra Circular 7.25 DeWalt", image: cementImg, decription: "Sierra circular profesional con motor de 15 amperios y base de magnesio para cortes precisos.", price: 299.99, rating: 4.5 },
    ];

    return (
        <section className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4">
                <div className="px-4 py-1 rounded-2xl bg-orange-100 text-orange-500 font-medium">Nueva Marca</div>
                <h2 className="text-5xl font-bold text-gray-700">DeWalt llega a FerroMax</h2>
                <p className="text-gray-600 text-center mt-2">Descubre la calidad profesional de DeWalt. Oferta especial de lanzamiento con hasta 40% de descuento.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-2xl h-100"><img src={firtsImg} alt="" className="w-full h-full object-cover rounded-2xl" /></div>
                <div className="grid grid-cols-2 gap-4">
                    {products.map((p, i) => (
                        <ProductsCard
                            key={i}
                            image={p.image}
                            title={p.title}
                            price={p.price}
                            variant="small"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewBrand;