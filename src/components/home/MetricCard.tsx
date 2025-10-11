type MetricsCardsProps = {
    title: string;
    description: string;
    span: string;
};

const MetricsCards = ({ title, description, span }: MetricsCardsProps) => {
    return (
        <article className="flex flex-col text-center gap-2">
            <h4 className="text-4xl font-bold text-orange-500">{title}</h4>
            <p className="text-base text-gray-800 font-medium">{description}</p>
            <span className="text-sm text-gray-600">{span}</span>
        </article>
    );
};

export default MetricsCards;