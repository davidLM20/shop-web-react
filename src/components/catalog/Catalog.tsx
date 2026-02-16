import Filters from "./Filters";
import ProductList from "./ProductList";

const Catalog = () => {
    return (
        <section className="flex gap-8">
            <Filters />
            <ProductList />
        </section>
    );
};

export default Catalog;