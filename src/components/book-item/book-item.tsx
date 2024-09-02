import Image from "next/image";
import styles from "./book-item.module.css";
import { Book } from "../../../types";
import Link from "next/link";

type Props = Book;

export default function BookItem({
  id,
  coverImgUrl,
  title,
  subTitle,
  author,
  publisher,
}: Props) {
  return (
    <>
      <Link href={`/book/${id}`}>
        <li className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={coverImgUrl} alt={`${title} 도서 표지`} fill />
          </div>
          <div className={styles.bookInfo}>
            <div className={styles.titles}>
              <h3>{title}</h3>
              <h4>{subTitle}</h4>
            </div>

            <p className={styles.author}>
              {author} | {publisher}
            </p>
          </div>
        </li>
      </Link>
    </>
  );
}
