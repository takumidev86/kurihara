import Link from "next/link";

export function Header() {
  return (
    // <header className={styles.header}>
    <header className="border-b-2 md:border-t-2 text-center container mx-auto ">
      <Link href="/">
        <a className="inline-block py-1 px-6 text-xl">Index</a>
      </Link>

      <Link href="/blogs">
        <a className="inline-block py-1 px-6 text-xl">Blog</a>
      </Link>
    </header>
  );
}
