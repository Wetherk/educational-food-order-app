import React, { useState, useReducer, useEffect } from "react";
import ProductsContext from "./products-context";

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

const defaultProductsState = {
    products: DUMMY_PRODUCTS,
    cartProducts: [],
};

const productsReducer = (state, action) => {
    if (action.type === "ADD_CART_PRODUCT") {
        const updatedCartProducts = state.cartProducts?.map((prevProduct) => {
            if (prevProduct.id === action.id) {
                return {
                    ...prevProduct,
                    amount: +prevProduct.amount + +action.amount,
                };
            }
            return prevProduct;
        });

        const productToAdd = state.products.filter(
            (product) => product.id === action.id
        )[0];

        if (
            !updatedCartProducts.some(
                (prevProduct) => prevProduct.id === action.id
            )
        ) {
            updatedCartProducts.push({
                ...productToAdd,
                amount: action.amount,
            });
        }

        return {
            ...state,
            cartProducts: updatedCartProducts,
        };
    }

    if (action.type === "REMOVE_CART_PRODUCT") {
        const filteredCartProducts = state.cartProducts
            .map((product) => {
                if (product.id !== action.id) return product;
                if (product.id === action.id && product.amount > 1) {
                    return {
                        ...product,
                        amount: product.amount - 1,
                    };
                }
                return null;
            })
            .filter((product) => product);

        return {
            ...state,
            cartProducts: filteredCartProducts,
        };
    }

    return defaultProductsState;
};

export const ProductsContextProvider = ({ children }) => {
    const [cartProductsAmount, setCartProductsAmount] = useState(0);
    const [cartProductsSum, setCartProductsSum] = useState(0);

    const [productsState, dispatchProductsAction] = useReducer(
        productsReducer,
        defaultProductsState
    );

    useEffect(() => {
        let totalSum = 0;
        let totalAmount = 0;

        productsState.cartProducts.forEach((product) => {
            totalAmount += +product.amount;
            totalSum += product.price * product.amount;
        });

        setCartProductsSum(totalSum.toFixed(2));
        setCartProductsAmount(totalAmount);
    }, [productsState.cartProducts]);

    const handleAddProduct = (id, amount) => {
        dispatchProductsAction({
            type: "ADD_CART_PRODUCT",
            id,
            amount,
        });
    };

    const handleRemoveProduct = (id) => {
        dispatchProductsAction({
            type: "REMOVE_CART_PRODUCT",
            id,
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                products: productsState.products,
                cartProducts: productsState.cartProducts,
                cartProductsAmount,
                cartProductsSum,
                onAddCartProduct: handleAddProduct,
                onRemoveCartProduct: handleRemoveProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
