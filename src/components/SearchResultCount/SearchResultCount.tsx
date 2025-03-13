import { numberWithCommas } from "@/utils/common";
import styles from "./SearchResultCount.module.scss";

interface Props {
    title: string;
    count: number;
}
const SearchResultCount = ({ title, count }: Props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <span className={styles.count}>
                총 <span className={styles.point}>{numberWithCommas(count)}</span>건
            </span>
        </div>
    );
};

export default SearchResultCount;
