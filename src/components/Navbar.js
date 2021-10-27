import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {selectShoppingCartContains} from '../pages/cart/ShoppingCartSlice';
import Logo from "../images/Logo.png";

export const Navbar = () => {
  const items = useSelector(selectShoppingCartContains)

  return (
    <nav>
      <section>
        <div className="navContent">
          <div className="Logo">
            <Link to="/">
              <img src={Logo} alt="Logo"/>
            </Link>
          </div>

          <div className="navLinks">
            <Link className="Links" to="/">Home</Link>
            <Link className="Links" to="/Orders">Orders</Link>
            <Link className="shappingCart" to="/ShoppingCart">{items.length}</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
