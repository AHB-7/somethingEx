import { Intro } from "@/components/intro";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Intro />
        </div>
    );
}
