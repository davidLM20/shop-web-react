import ProdcutsCard from "../ui/ProductsCard";
import drillImg from "../../assets/img/drill.png";
import cementImg from "../../assets/img/cemento.png";
import paintImg from "../../assets/img/paint.png";
import ButtonText from "../ui/ButtonText";

const FeaturedProducts = () => {
  const products = [
    { title: "Taladro Percutor Bosch 650W", image: drillImg, decription: "Taladro percutor profesional con chuck de 13mm y velocidad variable. Ideal para hormigón, metal y madera.", price: 15.00 },
    { title: "Martillo de Garra Stanley 16oz", image: cementImg, decription: "Martillo de garra con mango de fibra de vidrio para mayor durabilidad y absorción de impactos.", price: 120.00 },
    { title: "Juego de Brochas Premium", image: paintImg, decription: "Set de 5 brochas profesionales para pintura látex y esmalte. Cerdas sintéticas de alta calidad.", price: 25.00 },
    { title: "Sierra Circular 7.25 DeWalt", image: cementImg, decription: "Sierra circular profesional con motor de 15 amperios y base de magnesio para cortes precisos.", price: 299.99 },
    { title: "Juego de Llaves Allen 9 Piezas", image: paintImg, decription: "Set completo de llaves Allen hexagonales de 1.5mm a 10mm en estuche metálico.", price: 25.00 },
    { title: "Pintura Látex Blanco 4L", image: paintImg, decription: "Pintura látex interior lavable de alta cobertura. Rendimiento aproximado 40m² por galón.", price: 25.00 },
  ];

  return (
    <section className="flex flex-col justify-aroun">
      <div className="flex items-center justify-between w-auto mb-4">
        <h2 className="text-2xl text-gray-800 font-bold">Productos Destacados</h2>
        <ButtonText variant="primary">Ver todos los productos</ButtonText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProdcutsCard
            key={i}
            image={p.image}
            title={p.title}
            description={p.decription}
            price={p.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
