import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@/components/icons/search";
import CloseIcon from "@/components/icons/close";
import styles from "./SearchBoxKeyword.module.scss";

const STORAGE_NAME = "cdri-search-keywords";
const MAX_KEYWORD_COUNT = 8;
const SearchBoxKeyword = () => {
    const navigate = useNavigate();
    const [keywordList, setKeywordList] = useState<string[]>([]);

    const onAddKeyword = (keyword: string) => {
        const storedKeywords = localStorage.getItem(STORAGE_NAME);
        let newKeywordList = storedKeywords ? JSON.parse(storedKeywords) : [];
        newKeywordList.unshift(keyword);
        if (newKeywordList.length > MAX_KEYWORD_COUNT) {
            newKeywordList = newKeywordList.slice(0, MAX_KEYWORD_COUNT);
        }
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newKeywordList));
        setKeywordList(newKeywordList);
    };

    const onRemoveKeyword = (index: number) => {
        const newKeywordList = [...keywordList];
        newKeywordList.splice(index, 1);
        setKeywordList(newKeywordList);
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newKeywordList));
    };

    const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        const keyword = (e.target as HTMLInputElement).value;
        if (!keyword.length) return;
        navigate(`/?keyword=${keyword}`, { replace: true });
        e.currentTarget.blur();
        onAddKeyword(keyword);
    };

    useEffect(() => {
        const storedKeywords = localStorage.getItem(STORAGE_NAME);
        const newKeywordList = storedKeywords ? JSON.parse(storedKeywords) : [];
        if (newKeywordList.length > 0) {
            setKeywordList(newKeywordList);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <SearchIcon className={styles.searchIcon} />
            <input
                type="text"
                className={styles.input}
                placeholder="검색어를 입력하세요"
                onKeyDown={onSearch}
            />
            <ul className={styles.keywordList}>
                {keywordList.map((item, index) => (
                    <li className={styles.keyword} key={`${item}-${index}`}>
                        <Link to={`/keyword=${item}`} replace className={styles.link}>
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
    );
};

export default SearchBoxKeyword;
