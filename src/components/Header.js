import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <span className="header">ReactContext API Mini-Project</span>
      <ul className="nav">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
