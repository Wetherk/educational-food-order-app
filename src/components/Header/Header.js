import { useState, useContext, useEffect } from "react";
import styles from "./Header.module.css";

import { ReactComponent as ShoppingCartIcon } from "../../img/shopping-cart-icon.svg";
import Button from "../UI/Button";
import Cart from "../Cart/Cart";
import ProductsContext from "../../store/products-context";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    const productsContext = useContext(ProductsContext);

    useEffect(() => {
        if (productsContext.cartProducts.length) {
            setIsAdding(true);
            setTimeout(() => {
                setIsAdding(false);
            }, 300);
        }
    }, [productsContext.cartProducts]);

    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>FreshHarvest</h1>
            <Button
                onClick={handleCartClick}
                className={`${styles["header__shopping-cart-button"]} ${
                    isAdding && styles["add-animation"]
                }`}
            >
                <ShoppingCartIcon className={styles["header__cart-icon"]} />
                <p className={styles["header__cart-text"]}>Your Cart</p>
                <p className={styles["header__cart-number"]}>
                    {productsContext.cartProductsAmount}
                </p>
            </Button>
            {isCartOpen && <Cart onClose={handleCartClose} />}
        </header>
    );
};

export default Header;
