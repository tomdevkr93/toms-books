import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function SearchPage() {
  const router = useRouter();

  return <h1>Search Page {router.query.q}</h1>;
}

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
