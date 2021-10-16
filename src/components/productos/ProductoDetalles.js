import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from "../context/Dataprovider"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export const ProductoDetalles = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const params = useParams();


    useEffect(() => {
        productos.forEach(producto => {

            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
            }
        })
    }, [params.id, productos])

    return (
        <div className="detallediv">
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <p className="nuevo">Novo</p>
                        <div className="size">
                            <p>Modelo</p>
                            <select placeholder="Modelo">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10</option>
                                <option value="1">11</option>
                            </select>

                        </div>

                        <Link to="/productos">
                            <button className="btn1">Productos</button>
                        </Link>
                    </div>

                    <img src="https://a-static.mlcdn.com.br/618x463/pc-gamer-completo-g-fire-htg-634-amd-ryzen-5-4-2ghz-8gb-radeon-rx-vega-2gb-ssd-240gb-monitor-18/gfire/htg-634/e4e4c163a0d0793710568c664ae7a0ac.jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000" alt={detalle.title} />
                    <div className="description">
                        <p><b>Descrição:</b>Computadores e tecnologia na mao de todos e para todos.Cria nvas oportunidades e novos começos para teu futuro.<br /><br />
                            Bora a conquistar o nosso novo leque de oportunidades com a programação
                        </p>
                    </div>
                </div>
            }

        </div>
    )
}
