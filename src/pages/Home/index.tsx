import Button from "../../components/ui/Button";

function Home() {
  return (
    <div className="p-6">
      <div>
        <p className="text-[0.9rem] mt-4">Más de 10,000 clientes satisfechos</p>
      </div>
      <h1 className="font-sans-serif text-4xl uppercase font-bold">Tu ferretería de confianza</h1>
      <p className="mt-4 text-purple-600">Encuentra las mejores herramientas y materiales para todos tus proyectos de construcción y reparación.</p>
      <div className="flex">
        <Button variant="primary">Ver catálogo completo</Button>
        <Button variant="secondary">Nuestas ofertas</Button>
      </div>
    </div>
  );
}
export default Home;
