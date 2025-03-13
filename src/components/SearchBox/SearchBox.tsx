import SearchIcon from "@/components/icons/search";
import SearchBoxDetail from "@/components/SearchBoxDetail";
import SearchBoxKeyword from "@/components/SearchBoxKeyword";
import styles from "./SearchBox.module.scss";

const SearchBox = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputArea}>
                <SearchIcon className={styles.searchIcon} />
                <input type="text" className={styles.input} placeholder="검색어를 입력하세요" />
                <SearchBoxKeyword />
            </div>
            <div className={styles.detail}>
                <SearchBoxDetail />
            </div>
        </div>
    );
};

export default SearchBox;
