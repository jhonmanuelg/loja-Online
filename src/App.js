import React from "react";
import { Header } from "./components/header/Header";
// import ProductoLista from "./components/productos/ProductoLista";
import { BrowserRouter as Route } from "react-router-dom";
import Paginas from "./components/Paginas";
import 'boxicons';



function App() {
  return (
    <div className="App">
      <Route> 

      <Header />
      
      <Paginas />
      </Route>
      
     
    </div>
  );
}

export default App;
