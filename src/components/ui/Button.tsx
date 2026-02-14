import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, type = "button", icon, variant = "primary" }:ButtonProps) => {
    
    const variants: Record<string, string> = {
        primary: "flex justify-center items-center px-6 py-2 gap-2 text-gray-50 bg-orange-500 rounded-lg hover:bg-oranbge-600 hover:scale-105 transition-trasform",
        secondary: "px-6 py-2 text-orange-500 bg-white border-1 border-orange-500 rounded-lg hover:bg-gray-100",
    };

    const className = `${variants[variant]}`;

    return (
        <button type={type} onClick={onClick} className={className}>
            {icon && <span className="w-5 h-5 ">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;