import React from "react";
import { NavLink } from "react-router-dom";

type NavButtonProps = {
    to: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}


export default function NavButton({ to, children, icon }: NavButtonProps) {

    const baseStyle = "flex items-center gap-1 px-4 py-2 rounded-4xl text-gray-50 hover:bg-gray-100";

    const activeStyle = "flex items-center gap-1 px-4 py-2 bg-orange-500 rounded-4xl text-gray-50 hover:bg-orange-600 hover:text-white";
    const inactiveStyle = "flex items-center gap-2 px-4 py-2 rounded-4xl text-gray-700 hover:bg-gray-200";

    return (
        <NavLink 
            to={to}
            className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }>
            {icon && <span className="w-5 h-5">{icon}</span>}
            {children}
        </NavLink>
    );
};
