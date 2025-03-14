import { IBook } from "@/models/book";
import BookItem from "@/components/BookItem";
import SearchResultCount from "@/components/SearchResultCount";
import data from "@/data.json";
import styles from "./SearchBookList.module.scss";

const LIST: IBook[] = data.documents;
const META = data.meta;
const SearchBookList = () => {
    return (
        <div className={styles.wrapper}>
            <SearchResultCount title="찜한 책" count={META.pageable_count} />
            <ul>
                {LIST.map((item) => (
                    <li key={item.title} className={styles.item}>
                        <BookItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBookList;
