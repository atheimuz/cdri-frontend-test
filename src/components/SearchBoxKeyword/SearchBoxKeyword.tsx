import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import SearchIcon from "@/components/icons/search";
import CloseIcon from "@/components/icons/close";
import styles from "./SearchBoxKeyword.module.scss";

const STORAGE_NAME = "cdri-search-keywords";
const MAX_KEYWORD_COUNT = 8;
const SearchBoxKeyword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const inputRef = useRef<HTMLInputElement>(null);
    const [keywordList, setKeywordList] = useState<string[]>([]);

    const onAddKeyword = (keyword: string) => {
        if (!keyword.length) return;
        const storedKeywords = localStorage.getItem(STORAGE_NAME);
        const newKeywordList = storedKeywords ? JSON.parse(storedKeywords) : [];
        let updatedKeywordList = Array.from(new Set([keyword, ...newKeywordList]));
        if (updatedKeywordList.length > MAX_KEYWORD_COUNT) {
            updatedKeywordList = updatedKeywordList.slice(0, MAX_KEYWORD_COUNT);
        }
        localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedKeywordList));
        setKeywordList(updatedKeywordList);
    };

    const onRemoveKeyword = (index: number) => {
        const newKeywordList = [...keywordList];
        newKeywordList.splice(index, 1);
        setKeywordList(newKeywordList);
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newKeywordList));
        inputRef.current?.focus();
    };

    const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter" || e.repeat) return;
        const keyword = inputRef.current?.value?.trim() || "";
        navigate(`/?keyword=${keyword}`, { replace: true });
        onAddKeyword(keyword);
    };

    useEffect(() => {
        const storedKeywords = localStorage.getItem(STORAGE_NAME);
        const newKeywordList = storedKeywords ? JSON.parse(storedKeywords) : [];
        if (newKeywordList.length > 0) {
            setKeywordList(newKeywordList);
        }
    }, []);

    useEffect(() => {
        const activeElement = document.activeElement;
        if (activeElement instanceof HTMLElement) {
            activeElement.blur();
        }

        if (inputRef.current) {
            inputRef.current.value = keyword;
        }
    }, [keyword]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <SearchIcon className={styles.searchIcon} />
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    defaultValue={keyword}
                    placeholder="검색어를 입력하세요"
                    onKeyDown={onSearch}
                />
                <ul className={styles.keywordList}>
                    {keywordList.map((item, index) => (
                        <li className={styles.keyword} key={`${item}-${index}`}>
                            <Link to={`/?keyword=${item}`} replace className={styles.link}>
                                {item}
                            </Link>
                            <button
                                type="button"
                                className={styles.removeBtn}
                                onClick={() => onRemoveKeyword(index)}
                            >
                                <CloseIcon className={styles.removeIcon} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBoxKeyword;
