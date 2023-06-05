import React, { useState, useEffect } from "react";

const ProductsContext = React.createContext({
    cartProducts: [],
    cartProductsAmount: 0,
    cartProductsSum: 0,
    onAddProduct: (product, amount) => {},
    onRemoveProduct: (id) => {},
});

export const ProductsContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsAmount, setCartProductsAmount] = useState(0);
    const [cartProductsSum, setCartProductsSum] = useState(0);

    useEffect(() => {
        let totalSum = 0;
        let totalAmount = 0;

        cartProducts.forEach((product) => {
            totalAmount += +product.amount;
            totalSum += product.price * product.amount;
        });

        setCartProductsSum(totalSum.toFixed(2));
        setCartProductsAmount(totalAmount);
    }, [cartProducts]);

    const handleAddProduct = (product) => {
        setCartProducts((prevCartProducts) => {
            const updatedProducts = prevCartProducts?.map((prevProduct) => {
                if (prevProduct.id === product.id) {
                    return {
                        ...prevProduct,
                        amount: +prevProduct.amount + +product.amount,
                    };
                }
                return prevProduct;
            });

            if (
                !updatedProducts.some(
                    (prevProduct) => prevProduct.id === product.id
                )
            ) {
                updatedProducts.push(product);
            }

            return updatedProducts;
        });
    };

    const handleRemoveProduct = (id) => {
        setCartProducts((prevCartProducts) => {
            return prevCartProducts
                .map((product) => {
                    if (product.id !== id) return product;
                    if (product.id === id && product.amount > 1) {
                        return {
                            ...product,
                            amount: product.amount - 1,
                        };
                    }
                    return null;
                })
                .filter((product) => product);
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                cartProducts,
                cartProductsAmount,
                cartProductsSum,
                onAddProduct: handleAddProduct,
                onRemoveProduct: handleRemoveProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;
