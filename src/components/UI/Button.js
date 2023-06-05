import styles from "./Button.module.css";

const Button = ({ id, onClick, className, children }) => {
    return (
        <button
            id={id}
            onClick={onClick}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
