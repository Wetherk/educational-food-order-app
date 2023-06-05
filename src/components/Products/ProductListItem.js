import { useState } from "react";
import styles from "./ProductListItem.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";

const ProductListItem = ({ id, onAddProduct, title, description, price }) => {
    const [amount, setAmount] = useState(1);
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleAddClick = (event) => {
        onAddProduct({
            id: event.target.getAttribute("id"),
            amount,
        });
    };

    return (
        <Card className={styles["product-list-item"]}>
            <div className={styles["product-list-item__info"]}>
                <h4 className={styles["product-list-item__title"]}>{title}</h4>
                <p className={styles["product-list-item__description"]}>
                    {description}
                </p>
                <p
                    className={styles["product-list-item__price"]}
                >{`$${price}`}</p>
            </div>
            <div className={styles["product-list-item__actions"]}>
                <label
                    className={styles["product-list-item__amount-label"]}
                    htmlFor="amount"
                >
                    Amount
                </label>
                <input
                    value={amount}
                    onChange={handleAmountChange}
                    className={styles["product-list-item__amount-number"]}
                    type="number"
                    min="1"
                    id="amount"
                />
                <Button
                    id={id}
                    onClick={handleAddClick}
                    className={styles["product-list-item__button"]}
                >
                    + Add
                </Button>
            </div>
        </Card>
    );
};

export default ProductListItem;
