import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import styles from "./Header.module.scss";

const LINK_LIST = [
    { label: "도서 검색", path: "/" },
    { label: "내가 찜한 책", path: "/like" }
];
const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <h1 className={styles.logo}>CERTICOS BOOKS</h1>
                <nav className={styles.nav}>
                    <ul className={styles.links}>
                        {LINK_LIST.map((link) => (
                            <li
                                key={link.path}
                                className={cx(styles.link, {
                                    [styles.active]: location.pathname === link.path
                                })}
                            >
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
