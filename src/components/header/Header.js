import React from "react";
import Nike from "../images/Nike.jpg";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    
      <header>
        
        <Link to="/">
          <div className=" logo">
            <img src={Nike} alt="logo" width="150" />
          </div>
        </Link>

        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/guemsomos">QUEM SOMOS</Link>
          </li>
        </ul>
        <div className="cart" variant="light">
         
          <box-icon name='cart-add' type='solid' color='#ffffff' ></box-icon>
          <span className="item_total">0</span>
        </div>
      </header>
      
    
  );
};
