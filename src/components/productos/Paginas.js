import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Inicio } from "../inicio/Inicio";
import { ProductoLista }  from "./ProductoLista"
import { QuemSomos } from './QuemSomos';


export const Paginas = () => {
    return(
      <section>
         <Switch>
            <Route  path="/" exact component={ Inicio} />
            <Route  path="/productos" exact component={ ProductoLista} />
            <Route path="/guemsomos" exact component={ QuemSomos} />
         </Switch>

      </section>
    ) 
  };
  


  