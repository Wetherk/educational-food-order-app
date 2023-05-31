import React, { useState } from "react";

const ProductsContext = React.createContext({
    cartProducts: [],
    onAddProduct: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const handleAddProduct = (product) => {
        setCartProducts((prevCartProducts) => {
            return [...prevCartProducts, product];
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                cartProducts,
                onAddProduct: handleAddProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;
