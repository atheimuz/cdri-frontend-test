import { useState, useEffect } from "react";
import { IBook } from "@/models/book";
import EmptyResult from "@/components/common/EmptyResult";
import BookItem from "@/components/BookItem";
import SearchResultCount from "@/components/SearchResultCount";
import styles from "./LikedBookList.module.scss";

const STORAGE_NAME = "cdri-like-books";
const LikedBookList = () => {
    const [list, setList] = useState<IBook[]>([]);

    useEffect(() => {
        const storedLikedList = localStorage.getItem(STORAGE_NAME);
        const likedList = storedLikedList ? JSON.parse(storedLikedList) : [];
        if (likedList.length > 0) {
            setList(likedList);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <SearchResultCount title="찜한 책" count={list.length} />
            {list.length > 0 ? (
                <ul>
                    {list.map((item) => (
                        <li key={item.title} className={styles.item}>
                            <BookItem {...item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <EmptyResult message="찜한 책이 없습니다." />
            )}
        </div>
    );
};

export default LikedBookList;
