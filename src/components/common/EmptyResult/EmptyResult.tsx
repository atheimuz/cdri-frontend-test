import styles from "./EmptyResult.module.scss";

import bookImg from "@/images/book.svg";

interface Props {
    message: string;
}
const EmptyResult = ({ message }: Props) => {
    return (
        <div className={styles.wrapper}>
            <img src={bookImg} className={styles.icon} alt="책 아이콘" />
            <p className={styles.message}>{message}</p>
        </div>
    );
};

export default EmptyResult;
