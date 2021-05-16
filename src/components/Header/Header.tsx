import styles from "./Header.module.css";
// import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      {/* <Link></Link>
      <a href="/">index</a>
      <a href="blogs">blogs</a> */}
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/blogs">
        <a className={styles.anchor}>BLog</a>
      </Link>
    </header>
  );
}
