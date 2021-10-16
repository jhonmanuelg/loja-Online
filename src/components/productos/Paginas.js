import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Inicio } from "../inicio/Inicio";
import { ProductoLista } from "./ProductoLista"
import { QuemSomos } from './QuemSomos';
import { ProductoDetalles } from '../productos/ProductoDetalles';
import { Form } from '../form/Form';



export const Paginas = () => {
   return (
      <section>
         <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/productos" exact component={ProductoLista} />
            <Route path="/guemsomos" exact component={QuemSomos} />
            <Route path="/producto/:id" exact component={ProductoDetalles} />
            <Route path="/form"  exact component={Form}/>
         </Switch>

      </section>
   )
};



