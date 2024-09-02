import styles from "./index.module.css";
import Image from "next/image";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBook from "@/lib/fetch-one-book";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id;
  const book = await fetchBook(Number(id));

  return {
    props: {
      book,
    },
  };
}

export default function BookDetailPage({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return <div>책 검색에 실패했습니다.</div>;
  }

  return (
    <>
      <div className={styles.bookCovers}>
        <Image src={book.coverImgUrl} alt="책 표지" fill />
      </div>
      <header className={styles.header}>
        <h2>{book.title}</h2>
        <h3>{book.subTitle}</h3>
        <p>
          {book.author} | {book.publisher}
        </p>
      </header>
      <article className={styles.description}>{book.description}</article>
    </>
  );
}
