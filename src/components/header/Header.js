import React, { useContext } from "react"
import Nike from "../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Dataprovider"
import Cadastrar from "../form/Form";
// import QuemSomos from "../productos/QuemSomos"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button } from 'reactstrap';



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
        
        <div className="icon-menu">
        <box-icon name='menu' color='#eee7e7' ></box-icon>
        </div>



      <ul>
        <li className="principal secundario">
          <Link to="/"><Button className="btnCadastro" outline color="primary" >INICIO</Button></Link>
        </li>
        <li  className="principal secundario">
          <Link to="/productos"><Button  className="btnCadastro" outline color="primary" >PRODUCTOS</Button></Link>
        </li>
        <li  className="principal secundario">
          <Link to="/guemsomos"><Button  className="btnCadastro" outline color="primary" >QUEM SOMOS</Button></Link>
        </li>
        <li>
        <Cadastrar />
        </li>
      </ul>
      

      <div className="cart" variant="light" onClick={toogleMenu}>

        <box-icon name='cart-add' type='solid' color='#ffffff' ></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>

    </header>




  )
}
