

const Categories = () => {
    const categories = [
        { name: "Herramientas", description: "Todo tipo de herramientas profesionales", stock: "45" },
        { name: "Pinturas", description: "Pinturas y accesorios para tu hogar", stock: "78" },
        { name: "Construcción", description: "Materiales y accesorios de construcción", stock: "32" },
        { name: "Electricidad", description: "Productos eléctricos y cables", stock: "56" },
    ];
    return (
        <section className="py-10 px-6">
            <h2 className="text-2xl text-gray-800 font-bold mb-6 text-center">Todo lo que necesitas</h2>
            <p className="text-gray-600 text-center">Encuentra exactamente lo que buscas navegando por nuestras categorías especializadas, cada una con productos de la más alta calidad.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="group flex flex-col p-6 bg-white rounded-2xl shadow-[-1px_4px_8px_0px_#e6e6e7] hover:shadow-lg cursor-pointer text-center"
                    >
                        <p className="text-xl font-medium group-hover:text-orange-500 transition-colors">
                            {cat.name}
                        </p>
                        <p className="mt-2 text-[0.9rem] text-gray-600">
                            {cat.description}
                        </p>
                        <span className="mt-2 rounded-4xl bg-orange-100 px-2 py-1 text-xs font-medium text-orange-500 ">{cat.stock} productos</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
