import cx from "classnames";
import styles from "./Dropdown.module.scss";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ArrowUpIcon from "@/components/icons/arrow-up";

interface Props {
    className?: string;
    value: React.ReactNode;
    children: React.ReactNode;
}
const Dropdown = ({ className, value, children }: Props) => {
    return (
        <div className={cx(className, styles.wrapper)} tabIndex={0}>
            <div className={styles.inner}>
                <div className={styles.value}>{value}</div>
                <ArrowUpIcon className={styles.arrowUp} />
                <ArrowDownIcon className={styles.arrowDown} />
            </div>
            <div className={styles.items}>{children}</div>
        </div>
    );
};

const DropdownItem = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button type="button" className={styles.item} {...rest}>
            {children}
        </button>
    );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
