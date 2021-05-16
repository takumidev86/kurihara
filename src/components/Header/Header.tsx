import styles from "./Header.module.css";
// import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    // <header className={styles.header}>
    <header className="border-b-2 md:border-t-2 text-center container mx-auto ">
      <Link href="/">
        <a className="inline-block px-6 py-2 text-xl">Index</a>
        {/* <a className={styles.anchor}>Index</a> */}
      </Link>
      <Link href="/blogs">
        <a className="inline-block px-6 py-2 text-xl">Blog</a>
        {/* <a className={styles.anchor}>Blog</a> */}
      </Link>
    </header>
  );
}
