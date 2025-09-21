import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, type = "button", variant = "primary" }:ButtonProps) => {
    
    const variants: Record<string, string> = {
        primary: "px-6 py-2 text-gray-50 bg-orange-500 rounded-lg hover:bg-oranbge-600 hover:scale-105 transition-trasform",
        secondary: "px-6 py-2 text-blue-500 bg-white rounded-4xl hover:bg-gray-200",
    };

    const className = `${variants[variant]}`;

    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;