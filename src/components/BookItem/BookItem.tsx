import { useState } from "react";
import { IBook } from "@/models/book";
import Button from "@/components/common/Button";
import { numberWithCommas } from "@/utils/common";
import styles from "./BookItem.module.scss";

import ArrowUpIcon from "@/components/icons/arrow-up";
import ArrowDownIcon from "@/components/icons/arrow-down";

type Mode = "detail" | "summary";
interface ChildProps extends IBook {
    setMode: (mode: Mode) => void;
}
const SummaryBook = ({
    title,
    thumbnail,
    price,
    sale_price,
    authors,
    url,
    setMode
}: ChildProps) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.thumbnail} src={thumbnail} alt={title} />
            <div className={styles.mainInfoArea}>
                <div className={styles.titleArea}>
                    <h4 className={styles.title}>{title}</h4>
                    <span className={styles.authors}>{authors.join(", ")}</span>
                </div>
                <span className={styles.price}>{numberWithCommas(sale_price || price)}원</span>
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
    thumbnail,
    authors,
    contents,
    url,
    price,
    sale_price,
    setMode
}: ChildProps) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.thumbnail} src={thumbnail} alt={title} />
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
                        <span className={styles.salePrice}>{numberWithCommas(price)}원</span>
                    </li>
                    <li className={styles.priceItem}>
                        <p>할인가</p>
                        <span className={styles.price}>{numberWithCommas(sale_price)}원</span>
                    </li>
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

    return (
        <div className={styles[mode]}>
            {mode === "summary" && <SummaryBook {...props} setMode={setMode} />}
            {mode === "detail" && <DetailBook {...props} setMode={setMode} />}
        </div>
    );
};

export default BookItem;
