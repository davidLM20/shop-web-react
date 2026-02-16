
const ProductList = () => {
    return (
        <section className="flex flex-col gap-4 w-full">
            <div className="flex justify-between">
                <p>Mostrando <span className="font-semibold">8</span> productos</p>
                <div className="flex items-center gap-2">
                    <select className="bg-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="relevance">Relevancia</option>
                        <option value="price-low-high">Precio: de menor a mayor</option>
                        <option value="price-high-low">Precio: de mayor a menor</option>
                        <option value="newest">Más nuevo</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Aquí irían los productos */}
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 1</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$19.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 1</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$19.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 1</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$19.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 1</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$19.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 1</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$19.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-lg font-medium text-gray-700">Producto 2</h3>
                    <p className="text-sm text-gray-500">Descripción breve del producto.</p>
                    <p className="mt-2 text-orange-500 font-semibold">$29.99</p>
                </div>
                {/* Repetir para más productos */}
            </div>
        </section>
    );
}   

export default ProductList;