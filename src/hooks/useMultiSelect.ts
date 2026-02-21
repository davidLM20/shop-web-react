import { useState } from "react";

export function useMultiSelect<T>(initialValues: T[] = []) {
    const [selected, setSelected] = useState<T[]>(initialValues);

    const toggle = (value: T) => {
        setSelected((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const isSelected = (value: T) => {
        return selected.includes(value);
    }

    const clear = () => setSelected([]);

    return {
        selected,
        toggle,
        isSelected,
        clear
    }

}