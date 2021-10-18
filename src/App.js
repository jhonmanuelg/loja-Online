import React from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/productos/Paginas";
import { DataProvider } from "./components/context/Dataprovider";
import { Carrito } from "./components/carrito/Carrito";
// import { FooterContainer } from "./containers/footer";
import "boxicons";
import Cadastrar from './components/form/Form'

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
          
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
