import React from "react";
import pinIcon from "../assets/Pin_fill.svg";

interface NoticeProps {
    title : string;
    date: string;
    content: string;
}

const formatDate = (date: string) : string => {
    const d = new Date(date);
    const formatter = new Intl.DateTimeFormat("en-SG", {
        timeStyle: "short",
        dateStyle:"short",
    });
    
    return formatter.format(d);
}

const Notice : React.FC<NoticeProps> = (props) => {

    const formattedDate = formatDate(props.date);

    return(
        <div className="flex flex-row p-4 bg-white border border-1 border-emerald-400">
            {/* Left Column - Icon */}
            <div className="flex justify-start items-start">
                <img src={pinIcon}/>
            </div>
            {/* Right Column */}
            <div className="flex flex-col justify-start items-start">
                <span className="font-semibold text-base lg:text-lg">{props.title}</span>
                <span className="font-light text-xs text-grey-100">{formattedDate}</span>
                <span className="text-xs lg:text-base pt-2">{props.content}</span>
            </div>
        </div>
    )
}

export default Notice;