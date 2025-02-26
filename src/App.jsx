// importo usestate
import { useState, useEffect } from 'react'

// importo la libreria per la gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo  per context
import ProductsContext from './contexts/ProductsContext';

// importo lista da productspage
import ProductsPage from "./pages/ProductsPage";

// Pagine principali del sito B
import Contacts from "./pages/ContactsPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import NavBar from './components/Navbar';


import './App.css'
// import Prodotti from './components/ProductsList';
// import dell NavBar

function App() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => setProdotti(data));
  }, []);

  return (
    <ProductsContext.Provider value={prodotti}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/chisiamo" element={<ChiSiamoPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  )
}

export default App
