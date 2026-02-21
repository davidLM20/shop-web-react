import { Check } from "lucide-react";

interface CheckBoxProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    containerClassName?: string;
}

export const CheckBox = ({
    id,
    label,
    checked = false,
    onChange,
    disabled = false,
    containerClassName = "",
}: CheckBoxProps) => {
    return (
        <div className={`w-full group hover:bg-gray-100 p-1 rounded-md ${containerClassName}`}>
            <label
                htmlFor={id}
                className={`
                    flex items-center gap-2 w-full
                    cursor-pointer select-none
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
            >
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    className="sr-only peer"
                />
                <div
                    className={`
                        flex
                        w-5 h-5 items-center justify-center
                        rounded-md border transition-all duration-200
                        border-gray-300
                        peer-active:scale-90
                        peer-focus:ring-3
                        peer-focus:ring-orange-200
                        peer-checked:offset-2
                        peer-checked:bg-orange-400
                        peer-checked:border-orange-400
                    `}
                >
                    <div className={`
                        transition-transform duration-200 ease-out
                        ${checked ? "scale-100" : "scale-0"}
                    `}>
                        {checked && (
                            <Check size={16} className="text-white" />
                        )}
                    </div>

                </div>
                {label && (
                    <span className="text-sm group-hover:text-gray-950 text-gray-700">{label}</span>
                )}
            </label>
        </div>
    );
}


export default CheckBox;