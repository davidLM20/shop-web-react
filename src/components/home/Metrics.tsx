import MetricsCards from "./MetricCard";

const Metrics = () => {
    return (
        <section className="flex justify-around items-center">
            <MetricsCards title="25+" description="Años de experiencia" span="Sirviendo a la comunidad" />
            <MetricsCards title="10,000+" description="Clientes satisfechos" span="Confianza construida" />
            <MetricsCards title="5,000+" description="Productos disponibles" span="Siempre en stock" />
            <MetricsCards title="24h" description="Envíos express" span="Sirviendo a la comunidad" />
        </section>
    )
}

export default Metrics;