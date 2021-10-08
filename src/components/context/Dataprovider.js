// area dos elemento Hooks.

import React, {useState, useEffect, createContext } from "react";
import Data from "../../Data.js";


export const DataContext = createContext();

//creaçao da contas para creação dos contaxto dentro o projeto manejara as variable globales como on productos para ser consumida.

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])

   //item para erro y poda mostrar o conteudo
    useEffect(() =>{
        const productos = Data.items
        if(productos){
            setProductos(productos)
        }else {
            setProductos([])
        }  
            
    },[])

    const value = {
        productos : [productos]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )    
}

export default DataContext;