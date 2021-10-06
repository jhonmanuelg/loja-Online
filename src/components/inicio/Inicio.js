import React from 'react'
import Portada from "../../components/images/inicio.jpg"
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1> Inicio</h1> </Link>
            <Link to="/ProductoLista">
              <h1 > PRODUCTOS </h1>
             </Link>
             <Link to="/QueSomos">
             <h1 >QUEM SOMOS</h1>
            </Link>
            <img src={Portada} alt="" />
        </div>
    )
}
