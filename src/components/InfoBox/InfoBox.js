import Card from "../UI/Card";
import styles from "./InfoBox.module.css";

const InfoBox = () => {
    return (
        <Card className={styles["info-box"]}>
            <h2 className={styles["info-box__title"]}>
                Introducing FreshHarvest, the ultimate vegetable delivery app
            </h2>
            <p className={styles["info-box__description"]}>
                With FreshHarvest, you can experience the convenience of
                effortlessly ordering a wide variety of high-quality, locally
                sourced vegetables from the comfort of your home.
                <br />
                <br />
                Discover a world of vibrant produce at your fingertips. Browse
                through our extensive catalog featuring a diverse range of
                fresh, organic, and seasonal vegetables. From crispy greens and
                juicy tomatoes to vibrant peppers and root vegetables, we have
                everything you need to create wholesome, nutritious meals.
            </p>
        </Card>
    );
};

export default InfoBox;
