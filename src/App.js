import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";
import ProductsList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    const handleCartOpen = () => {
        setIsCartOpen(true);
    };

    return (
        <div className={styles.app}>
            {isCartOpen && <Cart onClose={handleCartClose} />}
            <Header onCartOpen={handleCartOpen} />
            <main>
                <InfoBox />
                <ProductsList />
            </main>
        </div>
    );
};

export default App;
