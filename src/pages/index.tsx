import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import styles from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-item/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-book";
import fetchRandomBooks from "@/lib/fetch-random-book";

export async function getServerSideProps() {
  const [allBooks, recommendedBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recommendedBooks,
    },
  };
}

export default function Home({
  allBooks,
  recommendedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <section>
        <h2 className={styles.header}>지금 추천하는 도서</h2>
        <ul>
          {recommendedBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </ul>
      </section>
      <section>
        <h2 className={styles.header}>등록된 모든 도서</h2>
        <ul>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </ul>
      </section>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
