
import React from 'react'
import Nike from "../images/Nike.jpg";
import { Link } from "react-router-dom";


export const Header = () => {
    return(
      <header>
        {/* <div className="menu">
          <box-icon name="menu"></box-icon>
        </div> */}
        <Link to=" /">
          <div className=" logo"><img src={Nike} alt="logo"  width="100"/></div>
        </Link>
        <ul>
          <li><Link to=" /">INICIO</Link></li>
          <li><Link to=" /ProductoLista">PRODUCTOS</Link></li>
          <li><Link to=" /QuemSmos">Quem somos</Link></li>
        </ul>
        <div className="cart">
        <box-icon  type="solid" name="cart-add"></box-icon>
          <span className="item_total">0</span>
        </div>
      </header>
    ) 
  };
  
  export default Header;