import { useState } from "react";

interface PriceRangeProps {
    min: number;
    max: number;
    step?: number;
    onChange?: (values: { min: number; max: number }) => void;
}

export const PriceRange = ({
    min,
    max,
    step = 1,
    onChange,
}: PriceRangeProps) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const handleMinChange = (value: number) => {
        const newValue = Math.min(value, maxValue - step);
        setMinValue(newValue);
        onChange?.({ min: newValue, max: maxValue });
    };

    const handleMaxChange = (value: number) => {
        const newValue = Math.max(value, minValue + step);
        setMaxValue(newValue);
        onChange?.({ min: minValue, max: newValue });
    };

    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="w-full flex flex-col gap-4 py-4">


            <div className="relative w-full h-6 flex items-center">
                <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
                <div
                    className="absolute h-2 bg-orange-400 rounded-full"
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`,
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={(e) => handleMinChange(Number(e.target.value))}
                    className="
                        absolute w-full h-2 
                        appearance-none bg-transparent 
                        pointer-events-none z-20 accent-orange-500 
                        [&::-webkit-slider-thumb]:pointer-events-auto 
                        [&::-moz-range-thumb]:pointer-events-auto"
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={(e) => handleMaxChange(Number(e.target.value))}
                    className="
                        absolute w-full h-2 
                        appearance-none bg-transparent 
                        pointer-events-none z-10 accent-orange-500 
                        [&::-webkit-slider-thumb]:pointer-events-auto 
                        [&::-moz-range-thumb]:pointer-events-auto"
                />
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>${minValue}</span>
                <span>${maxValue}</span>
            </div>
        </div>
    );
};

export default PriceRange;