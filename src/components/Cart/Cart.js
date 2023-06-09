import { useContext } from "react";

import styles from "./Cart.module.css";
import Dialog from "../UI/Dialog";
import CartItem from "./CartItem";
import ProductsContext from "../../store/products-context";
import Button from "../UI/Button";

const Cart = ({ onClose, onOrder }) => {
    const productsContext = useContext(ProductsContext);

    const handleAdd = (id) => {
        productsContext.onAddCartProduct(id, 1);
    };

    const handleRemove = (id) => {
        productsContext.onRemoveCartProduct(id);
    };

    const cartProducts = productsContext.cartProducts;
    const hasItems = !!cartProducts.length;

    return (
        <Dialog onClose={onClose}>
            <ul className={styles["cart-products-list"]}>
                {hasItems &&
                    cartProducts.map(({ id, name, price, amount }) => (
                        <CartItem
                            key={id}
                            id={id}
                            onAdd={handleAdd}
                            onRemove={handleRemove}
                            title={name}
                            price={price}
                            amount={amount}
                        />
                    ))}

                {!hasItems && (
                    <h1 className={styles["cart-products-list__not-found"]}>
                        No products added...
                    </h1>
                )}
            </ul>
            <div className={styles["cart-total-amount"]}>
                <h2>Total Amount</h2>
                <h2>${productsContext.cartProductsSum}</h2>
            </div>
            <footer className={styles["cart-actions"]}>
                <Button
                    className={styles["cart-actions__close"]}
                    onClick={onClose}
                >
                    Close
                </Button>
                {hasItems && <Button onClick={onOrder}>Order</Button>}
            </footer>
        </Dialog>
    );
};

export default Cart;
