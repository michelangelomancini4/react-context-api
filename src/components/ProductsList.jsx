import ProductsCard from "./ProductsCard";
// importo di usecontext
import { useContext } from "react";
// importo di productscontext 
import ProductsContext from '../contexts/ProductsContext';




function ProductsList() {
    // uso useContext per agganciarmi al poductsContext dove sono i dati da ciclare
    const prodotti = useContext(ProductsContext);

    return (
        <div>
            {prodotti.map((prodotto) => (
                <ProductsCard key={prodotto.id} prodotto={prodotto} />
            ))}
        </div>
    );

}

export default ProductsList;