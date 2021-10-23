import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <div className="navContent">
          <div className="Logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/ShoppingCart">Cart</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
