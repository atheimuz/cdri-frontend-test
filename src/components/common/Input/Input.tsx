import { forwardRef } from "react";
import styles from "./Input.module.scss";

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ ...rest }, ref) => {
        return <input ref={ref} className={styles.input} {...rest} />;
    }
);

export default Input;
