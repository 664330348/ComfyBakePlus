import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {selectShoppingCartContains} from '../pages/cart/ShoppingCartSlice';

export const Navbar = () => {
  const items = useSelector(selectShoppingCartContains)

  return (
    <nav>
      <section>
        <div className="navContent">
          <div className="Logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="navLinks">
            <Link to="/">Home</Link>
            {/* <Link to="/Shop">Shop</Link> */}
            <Link to="/Orders">Orders</Link>
            <Link to="/ShoppingCart">Cart {items.length}</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
