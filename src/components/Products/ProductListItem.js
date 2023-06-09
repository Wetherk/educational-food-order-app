import { useContext, useRef } from "react";
import styles from "./ProductListItem.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import ProductsContext from "../../store/products-context";

const ProductListItem = ({ id, title, description, price }) => {
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
            <ProductListItemForm
                id={id}
                className={styles["product-list-item__form"]}
            />
        </Card>
    );
};

const ProductListItemForm = ({ className, id }) => {
    const amountRef = useRef();
    const productsContext = useContext(ProductsContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();

        productsContext.onAddCartProduct(
            event.target.getAttribute("id"),
            amountRef.current.value
        );
    };

    return (
        <form onSubmit={handleFormSubmit} id={id} className={className}>
            <Input
                ref={amountRef}
                label="Amount"
                id={`amount_${id} `}
                input={{
                    type: "number",
                    defaultValue: "1",
                    min: "1",
                    max: "5",
                    step: "1",
                }}
            />
            <Button
                id={id}
                type="submit"
                className={styles["product-list-item__button"]}
            >
                + Add
            </Button>
        </form>
    );
};

export default ProductListItem;
