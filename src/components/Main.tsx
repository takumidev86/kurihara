import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

// pages 配下はexport defaultにしとけ
export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
