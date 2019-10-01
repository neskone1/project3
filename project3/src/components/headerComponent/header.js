import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div className="logo">
      Sneaker Room
      </div>
    <nav>
      <ul>
        <li className="first">
      <Link to="/">
        About
      </Link>
      </li>
      <li>
            <Link
              to="/myRoom">My Room
              
            </Link>
          </li>
          <li>
            <Link
              to="/Search">Search
              
            </Link>
          </li>
        </ul>
      
    </nav>

    </header>
  
  );
}

export default Header;
