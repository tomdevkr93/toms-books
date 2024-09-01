import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import styles from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-item/book-item";

export default function Home() {
  return (
    <>
      <section>
        <h2 className={styles.header}>지금 추천하는 도서</h2>
        <ul>
          <BookItem />
          <BookItem />
          <BookItem />
        </ul>
      </section>
      <section>
        <h2 className={styles.header}>등록된 모든 도서</h2>
        <ul>
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </ul>
      </section>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
