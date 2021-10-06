import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Inicio } from './inicio/Inicio';
import {ProductoLista}  from "./productos/ProductoLista"
import {QuemSomos} from './productos/QuemSomos';


export const Paginas = () => {
    return(
      <section>
         <Switch>
             <Route pat="/" exact component={Inicio} />
             <Route pat="/ProductoLista" exact component={ProductoLista} />
            <Route pat="/QuemSomos " exact component={QuemSomos} />
         </Switch>

      </section>
    ) 
  };
  


  export default Paginas;