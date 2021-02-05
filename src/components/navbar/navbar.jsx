import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        GC.
      </Link>
      <ul>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
        <li>
          <Link to="/projets">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
