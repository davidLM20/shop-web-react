import React from "react";

type ButtonTextProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
};

const ButtonText = ({ children, onClick, variant = "primary" }:ButtonTextProps) => {
    
    const variants: Record<string, string> = {
        primary: "px-4 py-2 font-medium text-gray-600 rounded-[0.5rem] hover:bg-gray-100 hover:text-orange-500",
        secondary: "px-6 py-2 text-blue-500 bg-white rounded-4xl hover:bg-gray-200",
    };

    const className = `${variants[variant]}`;

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default ButtonText;