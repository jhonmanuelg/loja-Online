import React from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/productos/Paginas";
import {FooterContainer} from "./containers/footer"
import { DataProvider } from "./components/context/Dataprovider";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div className="content-wrap">

        
        <Router>
          <Header />
          <Paginas />
        </Router>
        </div>
        <FooterContainer />
      </div>
    </DataProvider>
  );
}

export default App;
