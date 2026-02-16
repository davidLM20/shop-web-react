import {ChevronUpIcon} from "lucide-react";
import Input from "../ui/Input";
import CheckBox from "../ui/CheckBox";

const Filters = () => {

    const brands = ["3M", "Bosch", "Dewalt", "Makita", "Stanley", "Truper"];
    const offers = ["Descuento", "Envío gratis", "2x1", "Promoción"];
    return (
        <section className="flex flex-col gap-4 ">
            <h3 className="text-2xl font-medium">Filtros</h3>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-4 gap-4">
                <div className="flex justify-between">
                    <p className="font-medium">Marcas</p>
                    <ChevronUpIcon />
                </div>
                <Input/>
                <div className="flex flex-col gap-2">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center gap-2">
                            <CheckBox />
                            <span className="text-sm text-gray-600">{brand}</span>
                        </div>
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
                    <p className="font-medium">Marcas</p>
                    <ChevronUpIcon />
                </div>
                <Input/>
                <div className="flex flex-col gap-2">
                    {offers.map((offer) => (
                        <div key={offer} className="flex items-center gap-2">
                            <CheckBox />
                            <span className="text-sm text-gray-600">{offer}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Filters;