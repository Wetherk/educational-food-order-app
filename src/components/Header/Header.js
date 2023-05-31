import { useState } from "react";
import styles from "./Header.module.css";

import { ReactComponent as ShoppingCartIcon } from "../../img/shopping-cart-icon.svg";
import Button from "../UI/Button";

const Header = () => {
    const [cartProductsNumber, setCartProductsNumber] = useState(0);

    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>FreshHarvest</h1>
            <Button className={styles["header__shopping-cart-button"]}>
                <ShoppingCartIcon className={styles["header__cart-icon"]} />
                <p className={styles["header__cart-text"]}>Your Cart</p>
                <p className={styles["header__cart-number"]}>
                    {cartProductsNumber}
                </p>
            </Button>
        </header>
    );
};

export default Header;
