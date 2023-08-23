import "./App.css";
import { useState } from "react";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBare from "./Components/NavBare";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Info from "./Components/Info";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Sephora Ral Rouge Vel Brill18 07 Carm",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/6113/1.jpg?8384",
      price: 9000,
    },
    {
      id: 2,
      name: "PARTAGEZ CE PRODUIT Dr Rashell Crème Caviar Anti-age - 50 gr",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/11/1732/1.jpg?4387",
      price: 28900,
    },
    {
      id: 3,
      name: "Generic Casque Bluetooth - MP3 - P47 - Noir",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/7467/1.jpg?9301",
      price: 18900,
    },
    {
      id: 4,
      name: "Panther Rose Dégrais Plus+- Ultra Dégraissant-Multi usage - Savon de Marseille - 500 ml",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/9047/1.jpg?4586",
      price: 4500,
    },
  ]);
  return (
    <div className="App">
      <Router>
        <NavBare />
        <Routes>
          <Route path="/" element={<ProductList data={list} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/info/:id" element={<Info   data={list}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
