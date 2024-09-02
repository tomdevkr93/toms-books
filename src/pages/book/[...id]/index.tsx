import { useRouter } from "next/router";
import styles from "./index.module.css";
import Image from "next/image";

export default function BookDetailPage() {
  const router = useRouter();
  const { id: bookIDs } = router.query;

  return (
    <>
      <div className={styles.bookCovers}>
        <Image src="/images/dummy_book.jpg" alt="책 표지" fill />
      </div>
      <header className={styles.header}>
        <h2>얄코의 Too Much 친절한 HTML+CSS+자바스크립트</h2>
        <h3>진짜 초보자도 자신 있게 끝낼 수 있도록 제대로 파는</h3>
        <p>고현민 | 리코멘드</p>
      </header>
      <article className={styles.description}>
        ★ 진짜 초보자도 자신 있게 끝낼 수 있도록 투머치 설명러 얄코가 다 알려
        주는 웹 개발 가이드
        <br />
        <br />
        명쾌한 설명과 전달력 높은 강의로 입문자들의 찬사를 받고 있는
        얄코(얄팍한코딩사전)의 「제대로 파는 HTML+CSS」와 「뉴비를 위한
        자바스크립트」 온라인 강의를 한 권의 책으로 담아냈습니다. 코딩이 처음인
        사람도 어렵지 않게 프로그래밍과 웹 개발에 접근할 수 있도록 최대한
        친절하고 쉬운 비유로 설명합니다. 한두 줄로 끝날 수 있는 기능 설명을
        수많은 경우의 수의 화면을 보여 주며 비교하는 얄코 특유의 투머치 친절한
        설명은 초보자뿐만 아니라 현업에 있는 개발자들도 놓치고 넘어가던 개념까지
        세세하게 짚어 줍니다.
        <br />
        『얄코의 TOO MUCH 친절한 HTML+CSS+자바스크립트』는 웹 페이지 제작에
        필요한 세 가지 기술을 서로 연계해서 공부하는 데 최적화된 상태로 구성되어
        있습니다. 또한 개발물을 단지 시각적으로만 구현하는 것을 넘어 다양한
        사람을 배려하고 타 개발자와도 협업하기 좋은 &apos;착한&apos; 웹사이트를
        만드는 법까지 놓치지 않습니다. 총 15시간에 이르는 동영상 강의와 함께
        하면서 바쁜 독자들이 쉽고 편리하게 코딩의 즐거움을 느끼게 하는 것이 이
        책의 최우선 목표입니다.
        <br />
        <br />
        ‘얄코의 TOO MUCH 친절한’ 시리즈는
        <br />
        친절하다고 하지만 세상 불친절한 것이 많아 ‘TOO MUCH 친절한’으로
        탄생하였습니다.
      </article>
    </>
  );
}
