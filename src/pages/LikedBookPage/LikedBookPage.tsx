import PageTitle from "@/components/common/PageTitle";
import styles from "./LikedBookPage.module.scss";

const LikedBookPage = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitle title="내가 찜한 책" />
        </div>
    );
};

export default LikedBookPage;
