import React, { useContext } from "react";
//import IMG from "../images/img01.jpg";
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
    <img src={ Portada } width="1780" alt="inicio2" />
    </div>
      <h1 className="titel">PRODUCTOS</h1>
      <div className="productos">
            {productos.map(productos =>(
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

       
        {/* <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro"  />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
          </div>

          <div className="buttom">
            <button className="button">+ Carrinho</button>
            <div>
              <a href="# " className="btn">
                Vista{" "}
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
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

        <div className="producto">
          <a href=" #">
            <div className="producto_img">
              <img src={IMG} alt="sapato negro" />
            </div>
          </a>

          <div className="producto_footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$500</p>
          </div>

          <div className="buttom">
            <button className="button">+ Carrinho</button>
            <div>
              <a href="# " className="btn">
                Vista{" "}
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </>
  );
};


