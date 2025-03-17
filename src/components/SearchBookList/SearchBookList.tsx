import { useSearchParams } from "react-router-dom";
import { useBooks } from "@/lib/queries/useBookQuery";
import Button from "@/components/common/Button";
import EmptyResult from "@/components/common/EmptyResult";
import BookItem from "@/components/BookItem";
import LoadingIcon from "@/components/icons/loading";
import SearchResultCount from "@/components/SearchResultCount";
import styles from "./SearchBookList.module.scss";

const SearchBookList = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const detailKeyword = searchParams.get("detailKeyword") || "";
    const target = searchParams.get("target") || undefined;
    const { data, isFetching, fetchNextPage, hasNextPage, isError } = useBooks({
        keyword: target && detailKeyword ? detailKeyword : keyword,
        target,
        size: 10
    });

    const pages = data?.pages ?? [];

    if (isError) {
        return (
            <div className={styles.wrapper}>
                <SearchResultCount title="도서 검색 결과" count={pages[0]?.meta.total_count || 0} />
                <p>데이터를 가져오지 못했습니다.</p>
            </div>
        );
    }
    return (
        <div className={styles.wrapper}>
            <SearchResultCount title="도서 검색 결과" count={pages[0]?.meta.total_count || 0} />
            {pages[0] && pages[0].documents?.length > 0 ? (
                <ul>
                    {pages.map((page) =>
                        page?.documents?.map((item) => (
                            <li key={item.url} className={styles.item}>
                                <BookItem {...item} />
                            </li>
                        ))
                    )}
                </ul>
            ) : isFetching ? null : (
                <EmptyResult message="검색된 결과가 없습니다." />
            )}
            {hasNextPage && (
                <Button
                    theme="secondary"
                    onClick={() => fetchNextPage()}
                    className={styles.moreBtn}
                >
                    더보기
                </Button>
            )}
            {isFetching && <LoadingIcon className={styles.loading} />}
        </div>
    );
};

export default SearchBookList;
