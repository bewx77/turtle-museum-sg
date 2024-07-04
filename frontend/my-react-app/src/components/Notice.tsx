import React from "react";
import pinIcon from "../assets/Pin_fill.svg";

interface NoticeProps {
    title : string;
    date: string;
    content: string;
}

const Notice : React.FC<NoticeProps> = (props) => {
    return(
        <div className="flex flex-row p-4 bg-white border border-1 border-emerald-400">
            {/* Left Column - Icon */}
            <div className="flex justify-start items-start">
                <img src={pinIcon}/>
            </div>
            {/* Right Column */}
            <div className="flex flex-col justify-start items-start">
                <span className="font-semibold text-2xl">{props.title}</span>
                <span className="font-light text-lg text-grey">{props.date}</span>
                <span className="text-xl">{props.content}</span>
            </div>
        </div>
    )
}

export default Notice;