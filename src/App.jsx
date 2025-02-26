// importo usestate
import { useState } from 'react'

// importo la libreria per la gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo lista da productspage
import ProductsPage from "./pages/ProductsPage";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
