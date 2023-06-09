import { useContext } from "react";
import styles from "./ProductsList.module.css";

import ProductListItem from "./ProductListItem";
import ProductsContext from "../../store/products-context";

const ProductsList = () => {
    const productsContext = useContext(ProductsContext);

    return (
        <ul className={styles["product-list"]}>
            {productsContext.products.map(
                ({ id, name, description, price }) => (
                    <ProductListItem
                        key={id}
                        id={id}
                        title={name}
                        description={description}
                        price={price}
                    />
                )
            )}
        </ul>
    );
};

export default ProductsList;
