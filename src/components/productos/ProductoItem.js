import React from "react";
//import IMG from "../images/img01.jpg";


export const ProductoItem = ({
    key,
    id,
    title,
    price,
    image,
    Category,                   

}) => {

    


  return (
    <div className="producto">
      <a href=" #">
        <div className="producto_img">
          <img src={image.default} alt="sapato negro" />
        </div>
      </a>

      <div className="producto_footer">
        <h1> {title} </h1>
        <p> {Category} </p>
        <p className="price">${price}</p>
      </div>

      <div className="buttom">
        <button className="button">+ Carrinho</button>
        <div>
          <a href="# " className="btn">
            Vista{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
