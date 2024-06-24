import React from "react";
import turtleLogo from "../assets/turtle-museum-sg-logo.png";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-lg">
            <a href="/" className="flex items-center">
              <img src={turtleLogo} alt="Logo" className="h-16 mr-2" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-orange-400">
              Home
            </a>
            <a href="/turtles" className="text-black hover:text-gray-200">
              Turtles
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;