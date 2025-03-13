import styles from "./PageTitle.module.scss";

interface Props {
    title: string;
}
const PageTitle = ({ title }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
        </div>
    );
};

export default PageTitle;
