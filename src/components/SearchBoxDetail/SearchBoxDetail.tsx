import { useState, useRef, useEffect } from "react";
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
    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [detailStatus, setDetailStatus] = useState<boolean>(false);
    const [searchType, setSearchType] = useState<BookSearchType>(SEARCH_TYPE_LIST[0]);

    const onSearch = () => {
        const keyword = inputRef.current?.value;
        if (!keyword) return;
        navigate(`/?keyword=${keyword}&target=${searchType}`, { replace: true });
        setDetailStatus(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setDetailStatus(false);
            }
        };

        if (detailStatus) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [detailStatus]);

    return (
        <div className={styles.wrapper} ref={modalRef}>
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
                        <Input ref={inputRef} type="text" placeholder="검색어 입력" />
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
