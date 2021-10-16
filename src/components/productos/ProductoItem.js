import React, { useContext, } from "react";
//import IMG from "../images/img01.jpg";
import { Link } from "react-router-dom"
import { DataContext } from "../context/Dataprovider"


export const ProductoItem = ({
  key,
  id,
  title,
  price,
  image,
  Category,
  

}) => {


  const value = useContext(DataContext);
  const addCarrito = value.addCarrito

  return (
    <div className="producto">
      <Link to={`/producto/${id}`}>
        <div className="producto_img">
          <img src={image.default} alt="sapato negro" />
        </div>
      </Link>

      <div className="producto_footer">
        <h1> {title} </h1>
        <p> {Category} </p>
        <p className="price">${price}</p>
      </div>

      <div className="buttom" onClick={() =>  addCarrito(id)}>
        <button className="button">+ Carrinho</button>

        <div>
          <Link to={`/producto/${id}`} className="btn">
            Vista{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
