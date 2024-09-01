import Image from "next/image";
import styles from "./book-item.module.css";

export default function BookItem() {
  return (
    <>
      <li className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/dummy_book.jpg"
            alt="프론트엔드 성능 최적화 가이드 도서 이미지"
            fill
          />
        </div>
        <div className={styles.bookInfo}>
          <div className={styles.titles}>
            <h3>프론트엔드 성능 최적화 가이드</h3>
            <h4>웹 개발 스킬을 한 단계 높여 주는</h4>
          </div>

          <p className={styles.author}>유동균 | 인사이트</p>
        </div>
      </li>
    </>
  );
}
