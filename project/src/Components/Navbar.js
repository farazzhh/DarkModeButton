import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="w-screen h-16 py-2 bg-gray-100">
      <div className="container mx-auto">
        <Link to="/">
          <a>
            <img src="" alt="logo" className />
            <span>FRZH</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
