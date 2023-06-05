import { useContext } from "react";
import styles from "./ProductsList.module.css";

import ProductListItem from "./ProductListItem";
import ProductsContext from "../../store/products-context";

const ProductsList = () => {
    const DUMMY_PRODUCTS = [
        {
            id: "p1",
            name: "Cabbage",
            description: "Fresh cabbage right from the filed",
            price: "22.99",
        },
        {
            id: "p2",
            name: "Carrot",
            description: "Some nice carrots. Selected by Rabbits",
            price: "12.35",
        },
        {
            id: "p3",
            name: "Potato",
            description: "Tasty potato. Stolen from that guy",
            price: "5.33",
        },
        {
            id: "p4",
            name: "Tomato",
            description: "Red and beautiful",
            price: "25.55",
        },
        {
            id: "p5",
            name: "Apple",
            description: "The greenest apple on the planet",
            price: "10.00",
        },
        {
            id: "p6",
            name: "Onion",
            description: "Biggest onions you have ever seen",
            price: "5.60",
        },
        {
            id: "p7",
            name: "Pepper",
            description: "Finest peppers",
            price: "23.11",
        },
        {
            id: "p8",
            name: "Cucumber",
            description: "Best for your salad",
            price: "12.90",
        },
    ];
    const productsContext = useContext(ProductsContext);

    const handleAddProduct = ({ id, amount }) => {
        const productToAdd = DUMMY_PRODUCTS.filter(
            (product) => product.id === id
        )[0];

        productsContext.onAddProduct({
            ...productToAdd,
            amount,
        });
    };

    return (
        <ul className={styles["product-list"]}>
            {DUMMY_PRODUCTS.map(({ id, name, description, price }) => (
                <ProductListItem
                    key={id}
                    id={id}
                    title={name}
                    description={description}
                    price={price}
                    onAddProduct={handleAddProduct}
                />
            ))}
        </ul>
    );
};

export default ProductsList;
