import styles from "./App.module.css";

import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";
import ProductsList from "./components/Products/ProductsList";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <InfoBox />
            <ProductsList />
        </div>
    );
};

export default App;
