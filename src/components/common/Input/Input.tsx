import styles from "./Input.module.scss";

const Input = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...rest} className={styles.input} />;
};

export default Input;
