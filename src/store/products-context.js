import React from "react";

const ProductsContext = React.createContext({
    products: [],
    cartProducts: [],
    onAddCartProduct: (id, amount) => {},
    onRemoveCartProduct: (id) => {},
});

export default ProductsContext;
