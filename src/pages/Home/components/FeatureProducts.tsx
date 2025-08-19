import Button from "../../../components/ui/Button";

const FeaturedProducts = () => {
  const products = [
    { name: "Martillo Pro", price: "$15.00" },
    { name: "Taladro Eléctrico", price: "$120.00" },
    { name: "Pintura Acrílica", price: "$25.00" },
  ];

  return (
    <section className="flex flex-col py-10 px-6 bg-gray-50 gap-2">
      <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.price}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <Button variant={'secondary'}>Ver todos los productos</Button>
    </section>
  );
};

export default FeaturedProducts;
