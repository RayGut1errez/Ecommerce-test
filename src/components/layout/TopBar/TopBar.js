import styles from "./TopBar.modules.scss";

export function TopBar(props) {
    const { isOpenSearch } = props;
  
  
    return(
        <div className={styles.TopBar}>
            <div>Logo WEB</div>
        </div>
    );
}
