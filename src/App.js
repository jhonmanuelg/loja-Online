import React from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/productos/Paginas";
import { DataProvider } from "./components/context/Dataprovider";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
