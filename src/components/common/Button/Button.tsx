import cx from "classnames";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "primary" | "secondary" | "default";
    size?: "s" | "m";
}
const Button = ({ className, theme = "default", size = "m", children, ...rest }: Props) => {
    return (
        <button className={cx(className, styles.button, styles[theme], styles[size])} {...rest}>
            {children}
        </button>
    );
};

export default Button;
