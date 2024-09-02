import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "./index.module.css";
import BookItem from "@/components/book-item/book-item";
import fetchBooks from "@/lib/fetch-book";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const searchText = context.query.q;
  const searchedBooks = await fetchBooks(searchText as string);

  return {
    props: {
      searchedBooks,
    },
  };
}

export default function SearchPage({
  searchedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <section>
      <h2 className={styles.header}>등록된 모든 도서</h2>
      <ul>
        {searchedBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </ul>
    </section>
  );
}

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
