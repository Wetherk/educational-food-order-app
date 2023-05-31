import styles from "./ProductListItem.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";

const ProductListItem = ({ title, description, price }) => {
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
                    className={styles["product-list-item__amount-number"]}
                    type="number"
                    min="0"
                    id="amount"
                />
                <Button className={styles["product-list-item__button"]}>
                    + Add
                </Button>
            </div>
        </Card>
    );
};

export default ProductListItem;
