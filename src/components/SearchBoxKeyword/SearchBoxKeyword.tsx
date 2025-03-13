import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@/components/icons/close";
import styles from "./SearchBoxKeyword.module.scss";

const STORAGE_NAME = "cdri-search-keywords";
const SearchBoxKeyword = () => {
    const [keywordList, setKeywordList] = useState<string[]>([]);

    const onRemoveKeyword = (index: number) => {
        const newKeywordList = [...keywordList];
        newKeywordList.splice(index, 1);
        setKeywordList(newKeywordList);
        window.localStorage.setItem(STORAGE_NAME, JSON.stringify(newKeywordList));
    };

    useEffect(() => {
        const storedKeywords = window.localStorage.getItem(STORAGE_NAME);
        const newKeywordList = storedKeywords ? JSON.parse(storedKeywords) : [];
        if (newKeywordList.length > 0) {
            setKeywordList(newKeywordList);
        }
    }, []);

    return (
        <ul className={styles.wrapper}>
            {keywordList.map((item, index) => (
                <li className={styles.keyword} key={item}>
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
    );
};

export default SearchBoxKeyword;
