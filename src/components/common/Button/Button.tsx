import cx from "classnames";
import styles from "./Button.module.scss";

interface Props {
    as?: "button" | "a";
    theme?: "primary" | "secondary" | "default";
    size?: "s" | "m";
}
interface ButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {}
interface LinkProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Button = ({
    as,
    className,
    theme = "default",
    size = "m",
    children,
    ...rest
}: ButtonProps | LinkProps) => {
    const classnames = cx(className, styles.button, styles[theme], styles[size]);

    if (as === "a") {
        const { ...linkProps } = rest as LinkProps;
        return (
            <a className={classnames} {...linkProps}>
                {children}
            </a>
        );
    }

    return (
        <button className={cx(classnames)} {...(rest as ButtonProps)}>
            {children}
        </button>
    );
};

export default Button;
