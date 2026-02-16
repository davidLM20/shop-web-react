import { Check } from "lucide-react";

const CheckBox = () => {
    return (
        <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                <input type="checkbox"
                    checked
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="check-2" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Check size={16} />
                </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
                
            </label>
        </div>
    );
};

export default CheckBox;