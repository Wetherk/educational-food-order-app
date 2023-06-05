import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./store/products-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProductsContextProvider>
        <App />
    </ProductsContextProvider>
);
