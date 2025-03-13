import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookSearchType } from "@/models/book";
import { convertBookSearchType } from "@/utils/book";
import CloseIcon from "@/components/icons/close";
import Button from "@/components/common/Button";
import Dropdown from "@/components/common/Dropdown";
import Input from "@/components/common/Input";
import styles from "./SearchBoxDetail.module.scss";

const SEARCH_TYPE_LIST: BookSearchType[] = ["title", "person", "publisher"];
const SearchBoxDetail = () => {
    const navigate = useNavigate();
    const [detailStatus, setDetailStatus] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>("");
    const [searchType, setSearchType] = useState<BookSearchType>(SEARCH_TYPE_LIST[0]);

    const onSearch = () => {
        navigate(`/?keyword=${keyword}&target=${searchType}`, { replace: true });
        setDetailStatus(false);
    };

    return (
        <div className={styles.wrapper}>
            <Button className={styles.searchBtn} size="s" onClick={() => setDetailStatus(true)}>
                상세검색
            </Button>
            {detailStatus && (
                <div className={styles.modal}>
                    <button
                        type="button"
                        className={styles.closeBtn}
                        onClick={() => setDetailStatus(false)}
                    >
                        <CloseIcon />
                    </button>
                    <div className={styles.searchArea}>
                        <Dropdown
                            className={styles.dropdown}
                            value={convertBookSearchType(searchType)}
                        >
                            {SEARCH_TYPE_LIST.map((type) => (
                                <Dropdown.Item key={type} onClick={() => setSearchType(type)}>
                                    {convertBookSearchType(type)}
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                        <Input
                            type="text"
                            placeholder="검색어 입력"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <Button
                        className={styles.searchIcon}
                        theme="primary"
                        size="s"
                        onClick={onSearch}
                    >
                        검색하기
                    </Button>
                </div>
            )}
        </div>
    );
};

export default SearchBoxDetail;
