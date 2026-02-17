import React from "react";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    containerClassName?: string;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
    (
        {
            label,
            error,
            helperText,
            className = "",
            containerClassName = "",
            id,
            ...props },
        ref
    ) => {
        return (
            <div className={`w-full ${containerClassName}`}>
                <label
                    htmlFor={id}
                    className="flex items-start gap-2 cursor-pointer select-none"
                >
                    <input
                        ref={ref}
                        id={id}
                        type="checkbox"
                        className={`
                            mt-1 h-4 w-4 rounded border-gray-300
                            accent-orange-300
                            focus:ring-2 focus:ring-red-500
                            ${error ? "border-red-500 focus:ring-red-500" : ""}
                            ${className}
                            `}
                        {...props}
                    />
                    {label && (
                        <span className="text-sm text-gray-700">
                            {label}
                        </span>
                    )}
                </label>
                {error && helperText && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
                {!error && helperText && (
                    <p className="text-xs text-gray-500 mt-1">{helperText}</p>
                )}
            </div>
        );
    }
);

CheckBox.displayName = "CheckBox";