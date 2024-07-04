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
        className={`flex flex-col justify-between p-4 m-4 ${isHovered? `hover:bg-emerald-400 text-white cursor-pointer` : `bg-emerald-100/20 text-black`}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-4xl font-semibold p-2">{props.header}</div>
            <div className="text-lg font-light pl-4 pr-4 pb-4">{props.description}</div>
            <Button type={`${isHovered ? `card-active` : `card-inactive`}`} text="Learn More"></Button>
        </div>
    );
};

export default Card;