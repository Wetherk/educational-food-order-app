import styles from "./CartItem.module.css";

import Button from "../UI/Button";

const CartItem = ({ id, title, price, amount, onAdd, onRemove }) => {
    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handleAddClick = () => {
        onAdd(id);
    };

    return (
        <li className={styles["cart-item"]}>
            <div className={styles["cart-item__info"]}>
                <h3 className={styles["cart-item__title"]}>{title}</h3>

                <div className={styles["cart-item__price-amount-box"]}>
                    <p className={styles["cart-item__price"]}>${price}</p>
                    <p className={styles["cart-item__amount"]}>x{amount}</p>
                </div>
            </div>
            <div className={styles["cart-item__actions"]}>
                <Button
                    onClick={handleRemoveClick}
                    className={styles["cart-item__button"]}
                >
                    -
                </Button>
                <Button
                    onClick={handleAddClick}
                    className={styles["cart-item__button"]}
                >
                    +
                </Button>
            </div>
        </li>
    );
};

export default CartItem;
