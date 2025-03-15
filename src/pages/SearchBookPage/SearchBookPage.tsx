import PageTitle from "@/components/common/PageTitle";
import SearchBookList from "@/components/SearchBookList";
import SearchBoxDetail from "@/components/SearchBoxDetail";
import SearchBoxKeyword from "@/components/SearchBoxKeyword";
import styles from "./SearchBookPage.module.scss";

const SearchBookPage = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitle title="도서 검색" />
            <div className={styles.searchArea}>
                <SearchBoxKeyword />
                <SearchBoxDetail />
            </div>
            <SearchBookList />
        </div>
    );
};

export default SearchBookPage;
