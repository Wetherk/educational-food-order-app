import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(({ id, label, input, className }, ref) => {
    return (
        <div className={`${styles.input} ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} {...input} id={id} />
        </div>
    );
});

export default Input;
