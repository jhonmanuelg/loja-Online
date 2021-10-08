// area dos elemento Hooks.

import React, {useState, useEffect, createContext } from "react";
import Data from "../../Data.js";


export const DataContext = createContext();

//creaçao da contas para creação dos contaxto dentro o projeto manejara as variable globales como on p´roductos para ser consumida.

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])


    useEffect(() =>{
        const producto = Data
        setProductos(producto)        
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