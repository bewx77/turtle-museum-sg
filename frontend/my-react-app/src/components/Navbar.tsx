import React from "react";
import turtleLogo from "../assets/turtle-museum-sg-logo.png";

interface NavbarProps {
  onPage: "home" | "turtles";
}

const isOnPage = (page : string, onPage :string) : string => {
  return onPage === page ? "text-orange-400" : "text-black hover:text-gray-200";
}
const Navbar: React.FC<NavbarProps> = (props) => {

    return (
        <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-lg">
            <a href="/" className="flex items-center">
              <img src={turtleLogo} alt="Logo" className="h-16 mr-2" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className={isOnPage("home", props.onPage)}>
              Home
            </a>
            <a href="/turtles" className={isOnPage("turtles", props.onPage)}>
              Turtles
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;