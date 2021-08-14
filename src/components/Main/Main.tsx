import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";

// pages 配下はexport defaultにしとけ
export function Main(props) {
  return (
    // <main className={styles.main}>
    <main className="py-2 px-0 flex-1 flex flex-col justify-center items-center">
      <Headline page={props.page}>
        <code className="bg-gray-100 rounded-md p-3 font-mono ">
          pages/{props.page}.js
        </code>
      </Headline>
      <Links />
    </main>
  );
}
