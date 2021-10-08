// area dos elemento Hooks.

import  {useState, useEffect, createContext } from "react";
import Data from "./Data";
export const DataConstext = createContext();

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
        <DataConstext.Provider value = {value}>
            {props.childre}
        </DataConstext.Provider>
    )    
}