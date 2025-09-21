import React from "react";
import { NavLink } from "react-router-dom";

type Variant = "primary" | "secondary" | "icon";

type NavButtonProps = {
    to: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: Variant;
}


export default function NavButton({ to, children, icon, variant = "secondary" }: NavButtonProps) {

    const baseStyle = "flex items-center gap-1 px-4 py-2 rounded-4xl text-gray-50 hover:bg-gray-100";

    const variants: Record<Variant, string> = {
        primary:"h-8 text-gray-700 hover:bg-gray-50 hover:text-orange-500 rounded-xl",
        secondary:"h-8 text-gray-700 hover:bg-white hover:text-orange-500 rounded-xs",
        icon:"h-10 text-gray-700 rounded-xl hover:bg-gray-100"
    }
    {/*const activeStyle = "flex items-center gap-1 px-4 py-2 bg-orange-500 rounded-4xl text-gray-50 hover:bg-orange-600 hover:text-white";
    const inactiveStyle = "flex items-center gap-2 px-4 py-2 rounded-4xl text-gray-700 hover:bg-gray-200";*/}
    
    return (
        <NavLink 
            to={to}
            className={({ isActive }) =>
                `${baseStyle} ${variants[variant]} ${isActive && variant !== "icon" ? " bg-white text-orange-400":""}`
            }>
            {icon && <span className="w-5 h-5">{icon}</span>}
            {variant !=="icon" && children}
        </NavLink>
    );
};
