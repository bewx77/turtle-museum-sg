import React from "react";
import pinIcon from "../../assets/Pin_fill.svg";

const Notice : React.FC = () => {
    return (
        <div className=" flex flex-row p-4 outline outline-1 outline-emerald-400 bg-white">
            {/* Left Column */}
            <div className="flex justify-start items-start">
                <img src={pinIcon}></img>
            </div>
            {/* Right Column */}
            <div className="flex flex-col justify-start items-start">
                <p>
                    Testing: Title Here
                </p>
                <p>
                    Main Content Here
                </p>
            </div>
        </div>
    );
};

export default Notice