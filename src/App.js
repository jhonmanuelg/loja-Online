import React from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/productos/Paginas";
import { DataProvider } from "./components/context/Dataprovider";
import { FooterContainer } from "./containers/footer";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Paginas />
          <FooterContainer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
