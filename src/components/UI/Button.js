import styles from "./Button.module.css";

const Button = ({ className, children }) => {
    return (
        <button className={`${styles.button} ${className}`}>{children}</button>
    );
};

export default Button;
