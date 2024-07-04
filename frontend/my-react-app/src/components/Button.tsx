import React from "react";

interface ButtonProps {
    text: string;
    type: "primary" | "secondary" | "card-active" | "card-inactive";
}

const Button: React.FC<ButtonProps> = (props) => {
    const baseClasses = "font-light py-2 px-4 rounded-full";
    let typeClasses;
    switch (props.type) {
        case "primary":
            typeClasses = "bg-emerald-400 hover:bg-emerald-700 text-white";
            break;
        case "secondary":
            typeClasses = "bg-orange-100 hover:bg-orange-400 text-black";
            break;
        case "card-active":
            typeClasses = "bg-white text-black border border-1 border-emerald-400 ";
            break;
        case "card-inactive":
            typeClasses = "bg-emerald-100 text-black border border-1 border-emerald-400 ";
            break;
        default:
            "bg-emerald-400 hover:bg-emerald-700 text-white";
            break;
    }
    return(
        <button className={`${typeClasses} ${baseClasses}`}>
            {props.text}
        </button>
    );
};

export default Button;