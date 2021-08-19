import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";

// pages 配下はexport defaultにしとけ
export function Blogs(props) {
  return (
    // <main className={styles.main}>
    <main className="py-2 px-0 flex-1 flex flex-col justify-center items-center">
      <Links />
    </main>
  );
}
