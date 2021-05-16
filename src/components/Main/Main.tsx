import styles from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";

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
