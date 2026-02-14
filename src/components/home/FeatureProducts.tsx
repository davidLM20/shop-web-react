import ProductsCard from "../ui/ProductsCard";
import drillImg from "../../assets/img/drill.png";
import cementImg from "../../assets/img/cemento.png";
import paintImg from "../../assets/img/paint.png";
import Button from "../ui/Button";

const FeaturedProducts = () => {
  const products = [
    { title: "Taladro Percutor Bosch 650W", image: drillImg, decription: "Taladro percutor profesional con chuck de 13mm y velocidad variable. Ideal para hormigón, metal y madera.", price: 15.00, rating: 5 },
    { title: "Martillo de Garra Stanley 16oz", image: cementImg, decription: "Martillo de garra con mango de fibra de vidrio para mayor durabilidad y absorción de impactos.", price: 120.00, rating: 4.5 },
    { title: "Juego de Brochas Premium", image: paintImg, decription: "Set de 5 brochas profesionales para pintura látex y esmalte. Cerdas sintéticas de alta calidad.", price: 25.00, rating: 3 },
    { title: "Sierra Circular 7.25 DeWalt", image: cementImg, decription: "Sierra circular profesional con motor de 15 amperios y base de magnesio para cortes precisos.", price: 299.99, rating: 4.5 },
    { title: "Juego de Llaves Allen 9 Piezas", image: paintImg, decription: "Set completo de llaves Allen hexagonales de 1.5mm a 10mm en estuche metálico.", price: 25.00, rating: 4.5 },
    { title: "Pintura Látex Blanco 4L", image: paintImg, decription: "Pintura látex interior lavable de alta cobertura. Rendimiento aproximado 40m² por galón.", price: 25.00, rating: 2 },
  ];

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col items-center justify-between w-auto gap-2">
        <h2 className="text-3xl text-gray-700 font-bold">Productos Destacados</h2>
        <p className="text-gray-600">Los productos más vendidos y mejor valorados por nuestros clientes</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductsCard
            key={i}
            image={p.image}
            title={p.title}
            description={p.decription}
            price={p.price}
            rating={p.rating}
          />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Button variant="secondary">Ver más productos</Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
