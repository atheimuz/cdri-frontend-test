import { useSyncExternalStore } from "react";
import { BookLikeStore } from "@/store/BookLike";
import LikeFillIcon from "@/components/icons/like-fill";
import LikeLineIcon from "@/components/icons/like-line";
import styles from "./BookThumbnail.module.scss";
import { IBook } from "@/models/book";

interface Props {
    size: "s" | "m";
    bookInfo: IBook;
}
const BookThumbnail = ({ size, bookInfo }: Props) => {
    const isLiked = useSyncExternalStore(
        (callback) => BookLikeStore.subscribe(bookInfo?.title, callback),
        () => BookLikeStore.getSnapshot(bookInfo?.title)
    );

    if (!bookInfo) return null;
    return (
        <div className={`${styles.wrapper} ${styles[size]}`}>
            <button
                type="button"
                className={styles.likeBtn}
                onClick={() => BookLikeStore.toggleLike(bookInfo)}
            >
                {isLiked ? <LikeFillIcon /> : <LikeLineIcon />}
            </button>
            <img className={styles.thumbnail} src={bookInfo.thumbnail} alt={bookInfo.title} />
        </div>
    );
};

export default BookThumbnail;
