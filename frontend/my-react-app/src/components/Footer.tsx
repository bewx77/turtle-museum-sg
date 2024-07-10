import React from "react";
import turtleLogo from "../assets/turtle-museum-sg-logo.png";
import fbLogo from "../assets/Facebook.svg";
import igLogo from "../assets/Instagram.svg";
import ttLogo from "../assets/TikTok.svg";
import ytLogo from "../assets/YouTube.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black text-sm lg:text-base p-6">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* First column - Logo */}
                <div className="flex justify-start items-center mb-4 lg:mb-0">
                    <img src={turtleLogo} alt="Logo" className="h-16 mr-2"></img>
                </div>
                {/* Second Column - Social Media Icons */}
                <div className="flex flex-row justify-center items-center mb-4 lg:mb-0">
                    <span className="mr-8">Follow Us</span>
                    <a href="https://www.facebook.com/turtlemuseumsg/">
                        <img src={fbLogo} className="h-6 lg:h-8 mr-4"/>
                    </a>
                    <a href="https://www.instagram.com/turtlemuseumsg/">
                        <img src={igLogo} className="h-6 lg:h-8 mr-4"/>
                    </a>
                    <a href="https://www.tiktok.com/@turtlemuseumsg">
                        <img src={ttLogo} className="h-6 lg:h-8 mr-4"/>
                    </a>
                    <a href="https://www.youtube.com/@turtlemuseumsg8689/featured">
                        <img src={ytLogo} className="h-6 lg:h-8 mr-4"/>
                    </a>
                </div>
                {/* Third Column */}
                <div className="flex flex-col sm:justify-start sm:items-start justify-end items-end">
                    <span>&copy; 2024 Live Turtle Museum (Singapore).</span>
                    <span>All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;