import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onCartOpen }) => {
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>FreshHarvest</h1>
            <HeaderCartButton onCartButtonClick={onCartOpen} />
        </header>
    );
};

export default Header;
