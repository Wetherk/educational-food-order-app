import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import ProductsProvider from "./store/ProductsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProductsProvider>
        <App />
    </ProductsProvider>
);
