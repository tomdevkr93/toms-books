import { Html, Head, Main, NextScript } from "next/document";

// 기존 리액트의 index.html과 비슷한 역할
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
