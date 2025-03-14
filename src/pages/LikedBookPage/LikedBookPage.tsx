import PageTitle from "@/components/common/PageTitle";
import LikedBookList from "@/components/LikedBookList";
import styles from "./LikedBookPage.module.scss";

const LikedBookPage = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitle title="내가 찜한 책" />
            <LikedBookList />
        </div>
    );
};

export default LikedBookPage;
