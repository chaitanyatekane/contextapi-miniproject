import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>ReactContext API Mini-Project</span>
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
