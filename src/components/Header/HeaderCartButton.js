import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-cart-icon.svg";
import Button from "../UI/Button";
import ProductsContext from "../../store/products-context";

const HeaderCartButton = ({ onCartButtonClick, className }) => {
    const productsContext = useContext(ProductsContext);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        if (productsContext.cartProducts.length) {
            setIsAdding(true);
            const timer = setTimeout(() => {
                setIsAdding(false);
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [productsContext.cartProducts]);

    return (
        <Button
            onClick={onCartButtonClick}
            className={`${className} ${styles["shopping-cart-button"]} ${
                isAdding && styles["add-animation"]
            }`}
        >
            <ShoppingCartIcon
                className={styles["shopping-cart-button__icon"]}
            />
            <p className={styles["shopping-cart-button__text"]}>Your Cart</p>
            <p className={styles["shopping-cart-button__number"]}>
                {productsContext.cartProductsAmount}
            </p>
        </Button>
    );
};

export default HeaderCartButton;
