import styles from "./Footer.module.css";
import Image from "next/image";

export function Footer() {
  return (
    // <footer className={styles.footer}>
    <footer className="border-b-4 border-t-2 text-center container mx-auto">
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */}
      © 2021 kurihara
    </footer>
  );
}
