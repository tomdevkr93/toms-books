import { ReactNode } from "react";
import styles from "./global-layout.module.css";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">📖 Toms Books</Link>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>제작: Tom</footer>
    </div>
  );
}
