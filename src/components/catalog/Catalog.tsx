import Filters from "./Filters";
import ProductList from "./ProductList";

const Catalog = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

            <aside className="md:col-span-1">
                <div className="sticky top-24">
                    <Filters />
                </div>
            </aside>

            <div className="md:col-span-3">
                <ProductList />
            </div>

        </div>
    );
};

export default Catalog;