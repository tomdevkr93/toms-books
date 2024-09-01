import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import styles from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return <h1>Home</h1>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
