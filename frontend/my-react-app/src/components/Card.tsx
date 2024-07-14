import React, {useState} from "react";
import Button from "./Button";

interface CardProps {
    header: string;
    description: string;
}

const Card: React.FC<CardProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
        className={`flex flex-col justify-between w-72 h-56 md:w-64 md:h-64 lg:w-48 lg:h-80 p-4 ${isHovered? `hover:bg-emerald-400 text-white cursor-pointer` : `bg-emerald-100/20 text-black`}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-lg lg:text-xl font-semibold pb-4">{props.header}</div>
            <hr className={`border-t w-1/4 pb-4 ${isHovered? `hover:border-white` : `border-black`}`}></hr>
            <div className="text-sm font-light pb-4">{props.description}</div>
                <Button type={`${isHovered ? `card-active` : `card-inactive`}`} text="Learn More"></Button>
        </div>
    );
};

export default Card;