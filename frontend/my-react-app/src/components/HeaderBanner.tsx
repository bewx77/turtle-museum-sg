import React from "react";

interface HeaderBannerProps {
    backgroundImage: string;
    title: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = (props) => {
    return(
        <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className="text-white tracking-widest font-serif p-6">
          <h1 className="text-4xl">{props.title}</h1>
        </div>
      </div>
    );
};

export default HeaderBanner;
