import styles from "./page.module.css";
import AnimalPage from "./animals/page";

export default function Home() {
  return (
    <div className={styles.page}>
     <AnimalPage />
    </div>
  );
}
