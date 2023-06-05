import Card from "./Card";
import styles from "./Dialog.module.css";
import ReactDOM from "react-dom";

const Overlay = ({ onClose }) => {
    return (
        <>
            <div className={styles["dialog-overlay"]} onClick={onClose} />
        </>
    );
};

const Content = ({ children }) => {
    return <Card className={styles["dialog-content"]}>{children}</Card>;
};

const Dialog = ({ children, onClose }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Overlay onClose={onClose} />,
                document.querySelector("#overlay-root")
            )}
            {ReactDOM.createPortal(
                <Content children={children} />,
                document.querySelector("#dialog-root")
            )}
        </>
    );
};

export default Dialog;
