import { useState } from "react";
import cx from "classnames";
import { IBook } from "@/models/book";
import Button from "@/components/common/Button";
import { numberWithCommas } from "@/utils/common";
import ArrowUpIcon from "@/components/icons/arrow-up";
import ArrowDownIcon from "@/components/icons/arrow-down";
import BookThumbnail from "@/components/BookThumbnail";
import styles from "./BookItem.module.scss";

type Mode = "detail" | "summary";
interface ChildProps extends IBook {
    thumbnailEl: React.ReactNode;
    final_price: number;
    setMode: (mode: Mode) => void;
}
const SummaryBook = ({ title, thumbnailEl, final_price, authors, url, setMode }: ChildProps) => {
    return (
        <div className={styles.wrapper}>
            {thumbnailEl}
            <div className={styles.mainInfoArea}>
                <div className={styles.titleArea}>
                    <h4 className={styles.title}>{title}</h4>
                    <span className={styles.authors}>{authors.join(", ")}</span>
                </div>
                <span className={styles.price}>{numberWithCommas(final_price)}원</span>
            </div>
            <div className={styles.buttons}>
                <Button theme="primary" as="a" href={url} target="_blank" className={styles.buyBtn}>
                    구매하기
                </Button>
                <Button
                    theme="secondary"
                    className={styles.modeBtn}
                    onClick={() => setMode("detail")}
                >
                    상세보기
                    <ArrowDownIcon className={styles.arrowIcon} />
                </Button>
            </div>
        </div>
    );
};

const DetailBook = ({
    title,
    thumbnailEl,
    authors,
    contents,
    url,
    price,
    sale_price,
    final_price,
    setMode
}: ChildProps) => {
    return (
        <div className={styles.wrapper}>
            {thumbnailEl}
            <div className={styles.mainInfoArea}>
                <div className={styles.titleArea}>
                    <h4 className={styles.title}>{title}</h4>
                    <span className={styles.authors}>{authors.join(", ")}</span>
                </div>
                <p className={styles.contentsTitle}>책 소개</p>
                <p className={styles.contents}>{contents}</p>
            </div>
            <div className={styles.lastInfoArea}>
                <Button
                    theme="secondary"
                    className={styles.modeBtn}
                    onClick={() => setMode("summary")}
                >
                    상세보기
                    <ArrowUpIcon className={styles.arrowIcon} />
                </Button>
                <ul className={styles.priceItems}>
                    <li className={styles.priceItem}>
                        <p>원가</p>
                        <span
                            className={cx({
                                [styles.salePrice]: price !== final_price,
                                [styles.price]: price === final_price
                            })}
                        >
                            {numberWithCommas(price)}원
                        </span>
                    </li>
                    {sale_price > 0 && (
                        <li className={styles.priceItem}>
                            <p>할인가</p>
                            <span className={styles.price}>{numberWithCommas(final_price)}원</span>
                        </li>
                    )}
                </ul>
                <Button theme="primary" as="a" href={url} target="_blank" className={styles.buyBtn}>
                    구매하기
                </Button>
            </div>
        </div>
    );
};

const BookItem = (props: IBook) => {
    const [mode, setMode] = useState<Mode>("summary");
    const final_price = props.sale_price > 0 ? props.sale_price : props.price;

    return (
        <div className={styles[mode]}>
            {mode === "summary" && (
                <SummaryBook
                    {...props}
                    final_price={final_price}
                    setMode={setMode}
                    thumbnailEl={<BookThumbnail size="s" bookInfo={props} />}
                />
            )}
            {mode === "detail" && (
                <DetailBook
                    {...props}
                    final_price={final_price}
                    setMode={setMode}
                    thumbnailEl={<BookThumbnail size="m" bookInfo={props} />}
                />
            )}
        </div>
    );
};

export default BookItem;
