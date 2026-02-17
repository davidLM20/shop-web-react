import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            leadingIcon,
            trailingIcon,
            className,
            containerClassName,
            id,
            ...props },
        ref
    ) => {
        return (
            <div className={`flex flex-col gap-1 ${containerClassName}`}>
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                )}
                <div className="relative flex items-center">
                    {leadingIcon && (
                        <div className="absolute left-3 text-gray-400">
                            {leadingIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        id={id}
                        className={
                            `w-full border rounded-lg px-3 py-2 text-sm
                            focus:outline-none focus:ring-3 focus:ring-orange-200
                            ${leadingIcon ? "pl-10" : ""}
                            ${trailingIcon ? "pr-10" : ""}
                            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
                            ${className}`

                        }
                        {...props}
                    />
                    {trailingIcon && (
                        <div className="absolute right-3 text-gray-400">
                            {trailingIcon}
                        </div>
                    )}
                </div>
                {error && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                )}

                {!error && helperText && (
                    <p className="text-xs text-gray-500 mt-1">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";