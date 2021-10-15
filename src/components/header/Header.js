import React, { useContext } from "react"
import Nike from "../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Dataprovider"



export const Header = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito] = value.carrito


  const toogleMenu = () => {
    setMenu(!menu)
  }

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
      <div><button className="button">Formulario</button></div>

      <div className="cart" variant="light" onClick={toogleMenu}>

        <box-icon name='cart-add' type='solid' color='#ffffff' ></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>

    </header>

    


  )
}
