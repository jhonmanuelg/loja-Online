import React from "react";
import Portada from "../../components/images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1> INICIO</h1>
      </Link>

      <Link to="/productos">
        <h1> PRODUCTOS </h1>
      </Link>

      <Link to="/guemsomos">
        <h1>QUEM SOMOS</h1>
      </Link>

      <div className="inicio3">
      <img src={ Portada } alt="inicio" />
      </div>
      
      
    </div>

  );
};


