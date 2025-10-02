const Metrics = () =>{
    return (
        <section className="flex justify-around bg-gray-100 py-12 px-24">
            <div className="flex flex-col text-center gap-2">
                <h4 className="text-4xl font-bold text-orange-400">25+</h4>
                <p className="text-base text-gray-800 font-medium">Años de experiencia</p>
                <p className="text-sm text-gray-600">Sirviendo a la comunidad</p>
            </div>
            <div className="flex flex-col text-center gap-2">
                <h4 className="text-4xl font-bold text-orange-400">10,000+</h4>
                <p className="text-gray-800 font-medium">Clientes satisfechos</p>
                <p className="text-sm text-gray-600">Confianza construida</p>
            </div>
            <div className="flex flex-col text-center gap-2">
                <h4 className="text-4xl font-bold text-orange-400">5,000+</h4>
                <p className="text-gray-800 font-medium">Productos disponibles</p>
                <p className="text-sm text-gray-600">Siempre en stock</p>
            </div>
            <div className="flex flex-col text-center gap-2">
                <h4 className="text-4xl font-bold text-orange-400">24h</h4>
                <p className="text-gray-800 font-medium">Envíos express</p>
                <p className="text-sm text-gray-600">Sirviendo a la comunidad</p>
            </div>
        </section>
    )
}

export default Metrics;