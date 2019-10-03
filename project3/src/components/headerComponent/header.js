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
      <button className="btn peach-gradient color-block mb-3 mx-auto waves-effect">
        About
      </button>
      </Link>
      </li> 
      <li>
            <Link
          
              to="/myRoom"> 
              <button className="btn peach-gradient color-block mb-3 mx-auto waves-effect">
              My Room
              </button>
              
            </Link>
          </li>
          <li>
            <Link
              to="/Search">
              <button className="btn aqua-gradient color-block mb-3 mx-auto waves-effect">
              Search
              </button>
              
            </Link>
          </li>
        </ul>
      
    </nav>

    </header>
  
  );
}

export default Header;
