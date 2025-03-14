import SearchBoxDetail from "@/components/SearchBoxDetail";
import SearchBoxKeyword from "@/components/SearchBoxKeyword";
import styles from "./SearchBox.module.scss";

const SearchBox = () => {
    return (
        <div className={styles.wrapper}>
            <SearchBoxKeyword />
            <div className={styles.detail}>
                <SearchBoxDetail />
            </div>
        </div>
    );
};

export default SearchBox;
