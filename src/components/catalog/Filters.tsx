import { ChevronUpIcon, Search } from "lucide-react";
import { CheckBox } from "../ui/CheckBox";
import { Input } from "../ui/Input";
import { useMultiSelect } from "../../hooks/useMultiSelect";

const Filters = () => {

    const brands = ["3M", "Bosch", "Dewalt", "Makita", "Stanley", "Truper"];
    const offers = ["Descuento", "Envío gratis", "2x1", "Promoción"];
   
    const brandFilters = useMultiSelect<string>();
    const offerFilters = useMultiSelect<string>();

    

    return (
        <section className="flex flex-col gap-4 ">
            <h3 className="text-2xl font-medium">Filtros</h3>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-4 gap-4">
                <div className="flex justify-between">
                    <p className="font-medium">Marcas</p>
                    <ChevronUpIcon />
                </div>
                <Input
                    type="search"
                    leadingIcon={<Search size={16} />}
                    placeholder="Buscar marca..."

                />
                <div className="flex flex-col gap-1">
                    {brands.map((brand) => (
                        <CheckBox
                            key={brand}
                            id={brand}
                            label={brand}
                            checked={brandFilters.isSelected(brand)}
                            onChange={() => brandFilters.toggle(brand)} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-gray-50 p-4 gap-4">
                <div className="flex justify-between">
                    <p className="font-medium">Rango de Precios</p>
                    <ChevronUpIcon />
                </div>
                <div className="bg-gray-900 h-3 rounded-full"></div>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-4 gap-4">
                <div className="flex justify-between">
                    <p className="font-medium">Ofertas</p>
                    <ChevronUpIcon />
                </div>
                <div className="flex flex-col gap-2">

                    {offers.map((offer) => (
                        <CheckBox
                            key={offer}
                            id={offer}
                            label={offer}
                            checked={offerFilters.isSelected(offer)}
                            onChange={() => offerFilters.toggle(offer)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Filters;