import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import styles from "./searchable-layout.module.css";
import { useRouter } from "next/router";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (search === "") {
      setSearch((router.query.q as string) ?? "");
    }
  }, [router.query.q]);

  function onChangeSearchText(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onClickSearchButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push(`/search?q=${search}`);
  }

  return (
    <>
      <form className={styles.searchForm}>
        <input
          name="searchText"
          type="text"
          placeholder="검색어를 입력하세요 ..."
          onChange={onChangeSearchText}
          value={search}
        />
        <button onClick={onClickSearchButton}>검색</button>
      </form>
      {children}
    </>
  );
}
