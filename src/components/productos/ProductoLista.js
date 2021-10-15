import React, { useContext } from "react";

import Portada from "../images/inicio2.jpg";
import { DataContext } from "../context/Dataprovider"
import { ProductoItem } from "./ProductoItem";




export const ProductoLista = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos
  console.log(productos)

  return (
    <>

      <div className="inicio2">
        <img src={Portada} width="1780" alt="inicio2" />
      </div>

      

      <h1 className="titel">PRODUCTOS</h1>
      <div className="productos">
        {productos.map(productos => (
          <ProductoItem
            key={productos.id}
            id={productos.id}
            title={productos.title}
            price={productos.price}
            image={productos.image}
            Category={productos.Category}
            cantidad={productos.cantidad}

          />
        ))
        }




      </div>



    </>
  );
};


