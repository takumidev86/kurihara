import styles from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";

// pages 配下はexport defaultにしとけ
export function Main(props) {
  return (
    // <main className={styles.main}>
    <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
      <Headline page={props.page}>
        <code className="bg-gray-100 rounded-3xl p-3 text-lg font-mono">
          pages/{props.page}.js
        </code>
      </Headline>
      <Links />
      <div className={styles.test}></div>
    </main>
  );
}
