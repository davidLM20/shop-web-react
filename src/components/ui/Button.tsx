import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, type = "button", variant = "primary" }:ButtonProps) => {
    /*const baseStyle = 
    "px-4 py-2 text-green-200 border-dashed border-2 border-gray-400 font-semibold hover:bg-green-500 hover:text-gray-800 transition-colors duration-200";
    */
    const variants: Record<string, string> = {
        primary: "px-6 py-2 text-gray-50 bg-orange-500 rounded-4xl hover:bg-oranbge-600 hover:scale-105 transition-trasform",
        secondary: "px-16 py-2 text-blue-500 bg-white rounded-4xl hover:bg-gray-100",
    };

    const className = `${variants[variant]}`;

    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;