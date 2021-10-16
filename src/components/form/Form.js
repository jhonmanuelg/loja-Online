import React from "react";
import  "./styleform.css"
import { Link } from "react-router-dom";


export const Form = () => {

  
    return (
      <div className="formulario">
        <form className="caixaPrincipal">
          <h1>Ingrese seu produto</h1>
          <fieldset className="caixaSecundaria">
            <div className="cuadro"></div>
            <label className="caixaSoporte">
              image
              <input
                type="file"
              />
            </label>

            <label className="caixaSoporte">
              title
              <input
                type="text"
              />
            </label>

            <label className="caixaSoporte">
              categoria
              <input
                type="text"
              />
            </label>

            <label className="caixaSoporte">
              price
              <input
                type="number"
               
              />
            </label>

            <label className="caixaSoporte">
              cantidad
              <input
                type="number"
              />
            </label>
            <button className="btnform">INGRESE</button>
          </fieldset>
        </form>
      </div>
    );
  
}
