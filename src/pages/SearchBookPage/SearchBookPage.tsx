import PageTitle from "@/components/common/PageTitle";
import SearchBookList from "@/components/SearchBookList";
import SearchBox from "@/components/SearchBox";
import styles from "./SearchBookPage.module.scss";

const SearchBookPage = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitle title="도서 검색" />
            <div className={styles.searchArea}>
                <SearchBox />
            </div>
            <SearchBookList />
        </div>
    );
};

export default SearchBookPage;
