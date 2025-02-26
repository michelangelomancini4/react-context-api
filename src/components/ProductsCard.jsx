function Prodotti({ prodotto }) {
    return (
        <div className='productspage'>
            <h2>I NOSTRI PIATTI:</h2>
            <ul>
                <li key={prodotto.id}>
                    <h3>{prodotto.name}</h3>
                    <img src={prodotto.image} alt="#" />
                    <p>{prodotto.content}</p>
                    <label className='ingredients'>{prodotto.ingredients}</label>
                </li>
            </ul>
        </div>
    );
}

export default Prodotti;
