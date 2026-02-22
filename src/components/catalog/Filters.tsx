import { Search } from "lucide-react";
import { CheckBox } from "../ui/CheckBox";
import { Input } from "../ui/Input";
import { useMultiSelect } from "../../hooks/useMultiSelect";
import PrinceRange from "../ui/PriceRange";
import Collapsible from "./Collapsible";

const Filters = () => {

    const brands = ["3M", "Bosch", "Dewalt", "Makita", "Stanley", "Truper"];
    const offers = ["Descuento", "Envío gratis", "2x1", "Promoción"];

    const brandFilters = useMultiSelect<string>();
    const offerFilters = useMultiSelect<string>();

    return (
        <section className="flex flex-col gap-4 ">
            <h3 className="text-2xl font-medium">Filtros</h3>

            <Collapsible title="Categorías">
                <Input
                    type="search"
                    leadingIcon={<Search size={16} />}
                    placeholder="Buscar marca..."

                />
                {brands.map((brand) => (
                    <CheckBox
                        key={brand}
                        id={brand}
                        label={brand}
                        checked={brandFilters.isSelected(brand)}
                        onChange={() => brandFilters.toggle(brand)} />
                ))}
            </Collapsible>
            <Collapsible title="Rango de Precios">
                <PrinceRange
                    min={0}
                    max={1000}
                    step={10}
                    onChange={(values) => {
                        console.log(values.min, values.max);
                    }}
                />
            </Collapsible>

            <Collapsible title="Ofertas">
                {offers.map((offer) => (
                    <CheckBox
                        key={offer}
                        id={offer}
                        label={offer}
                        checked={offerFilters.isSelected(offer)}
                        onChange={() => offerFilters.toggle(offer)} />
                ))}
            </Collapsible>

        </section>
    );
};

export default Filters;