// area dos elemento Hooks.

import React, {useState, useEffect, createContext } from "react";
import Data from "../../Data.js";


export const DataContext = createContext();

//creaçao da contas para creação dos contaxto dentro o projeto manejara as variable globales como on productos para ser consumida.

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu,setMenu] = useState(false)
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0);

    
   

   //item para erro y poda mostrar o conteudo
    useEffect(() =>{
        const productos = Data.items
        if(productos){
            setProductos(productos)
        }else {
            setProductos([])
        }  
            
    },[])

    const addCarrito = (id) =>{
        const addCarrito = carrito.every(item => {
            return item.id  !== id;
        })
        if(addCarrito){
            const data = productos.filter(producto => {

                return producto.id === id;
            })
            setCarrito([...carrito,...data])
        }
    }

useEffect (() =>{
const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))

if (dataCarrito){
    setCarrito(dataCarrito)
}
}, [])


useEffect(() =>{
    localStorage.setItem('dataCarrito',JSON.stringify(carrito))
},[carrito])



useEffect(() =>{
const getTotal = () => {
   const res = carrito.reduce ((prev,item) =>{
       return prev + (item.price * item.cantidad)
   },0)
   setTotal(res)
}

getTotal()
},[carrito])

    const value = {
        productos : [productos],
         menu: [menu,setMenu],
         addCarrito: addCarrito,
         carrito:[carrito,setCarrito],
         total: [total, setTotal]

    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )    
}

export default DataContext;